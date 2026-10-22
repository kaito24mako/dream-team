const assert = require("node:assert/strict");
const { beforeEach, test } = require("node:test");

let users;
let failSave;
let queue = Promise.resolve();
const transaction = { LOCK: { UPDATE: "UPDATE" } };
const db = {
  sequelize: {
    transaction(callback) {
      const result = queue.then(async () => {
        const snapshot = structuredClone(users);
        try {
          return await callback(transaction);
        } catch (error) {
          users = snapshot;
          throw error;
        }
      });
      queue = result.catch(() => {});
      return result;
    },
  },
  User: {
    async findByPk(userId, options) {
      assert.equal(options.transaction, transaction);
      assert.equal(options.lock, transaction.LOCK.UPDATE);
      const data = users.find((user) => user.id === userId);
      if (!data) return null;
      return {
        ...data,
        async save(options) {
          assert.equal(options.transaction, transaction);
          Object.assign(data, {
            wins: this.wins, losses: this.losses, currency: this.currency,
          });
          if (failSave) throw new Error("Save failed");
        },
      };
    },
  },
};

require.cache[require.resolve("../models")] = { exports: db };
process.env.JWT_SECRET = "match-result-test-secret";
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const router = require("../routes/user");

beforeEach(() => {
  failSave = false;
  users = [1, 2].map((id) => ({
    id, wins: 0, losses: 0, currency: 0, password: "excluded-from-result",
  }));
});

test("a win increments only wins and awards the level's coins", async () => {
  assert.deepEqual((await request({ isWinner: true, level: 3 })).data, {
    wins: 1, losses: 0, currency: 200,
  });
  assert.equal(users[1].wins, 0);
  assert.equal(users[1].currency, 0);
});

test("a loss increments only losses and subtracts the level's penalty", async () => {
  users[0].wins = 3;
  users[0].losses = 2;
  users[0].currency = 500;
  assert.deepEqual((await request({ isWinner: false, level: 7 })).data, {
    wins: 3, losses: 3, currency: 300,
  });
});

test("loss penalties never make coins negative, including the first game", async () => {
  assert.deepEqual((await request({ isWinner: false, level: 10 })).data, {
    wins: 0, losses: 1, currency: 0,
  });
  users[0].currency = 50;
  assert.deepEqual((await request({ isWinner: false, level: 10 })).data, {
    wins: 0, losses: 2, currency: 0,
  });
});

test("early league losses have no coin penalty but still count as losses", async () => {
  users[0].currency = 100;
  assert.deepEqual((await request({ isWinner: false, level: 1 })).data, {
    wins: 0, losses: 1, currency: 100,
  });
});

test("multiple completed matches accumulate persisted totals", async () => {
  await request({ isWinner: true, level: 1 });
  await request({ isWinner: false, level: 3 });
  const { data: result } = await request({ isWinner: true, level: 2 });
  assert.deepEqual(result, { wins: 2, losses: 1, currency: 200 });
  assert.equal(Math.round(result.wins / (result.wins + result.losses) * 100), 67);
});

test("simultaneous match results preserve both updates", async () => {
  await Promise.all([
    request({ isWinner: true, level: 1 }),
    request({ isWinner: false, level: 2 }),
  ]);
  assert.equal(users[0].wins, 1);
  assert.equal(users[0].losses, 1);
  assert.equal(users[0].currency, 100);
});

test("save failure rolls back both the record and coins", async () => {
  failSave = true;
  const response = await request({ isWinner: true, level: 10 });
  assert.equal(response.status, 500);
  assert.equal(users[0].wins, 0);
  assert.equal(users[0].losses, 0);
  assert.equal(users[0].currency, 0);
});

test("invalid outcomes and levels cannot change statistics", async () => {
  for (const isWinner of [undefined, null, "false", 0, 1]) {
    assert.equal((await request({ isWinner, level: 1 })).status, 400);
  }
  for (const level of [undefined, null, "1", 0, -1, 1.5, 11]) {
    assert.equal((await request({ isWinner: true, level })).status, 400);
  }
  assert.equal(users[0].wins, 0);
});

test("missing accounts return not found", async () => {
  const token = jwt.sign({ user: { userId: 99 } }, config.auth.jwtSecret);
  assert.equal((await request({ isWinner: true, level: 1 }, token)).status, 404);
});

// call the real route without starting a server or connecting to MySQL
function request(body, token = jwt.sign({ user: { userId: 1 } }, config.auth.jwtSecret)) {
  return new Promise((resolve, reject) => {
    const req = { method: "POST", url: "/matches/result", body, header: () => token };
    const res = {
      statusCode: 200,
      status(code) { this.statusCode = code; return this; },
      json(data) { resolve({ status: this.statusCode, data }); return this; },
    };
    router.handle(req, res, (error) => reject(error || new Error("Route not found")));
  });
}

test("the result endpoint requires authentication", async () => {
  assert.equal((await request({ isWinner: true, level: 1 }, null)).status, 401);
  assert.equal((await request({ isWinner: true, level: 1 }, "invalid")).status, 401);
  assert.equal(users[0].wins, 0);
});

test("the result endpoint updates the signed-in account and ignores supplied totals and coins", async () => {
  const result = await request({
    isWinner: true, level: 1, userId: 2, wins: 99, currency: 999999,
  });
  assert.equal(result.status, 200);
  assert.deepEqual(result.data, { wins: 1, losses: 0, currency: 100 });
  assert.equal(users[1].wins, 0);
  assert.equal(users[1].currency, 0);
});

test("the result endpoint rejects malformed and missing bodies", async () => {
  assert.equal((await request({ isWinner: "win", level: 1 })).status, 400);
  assert.equal((await request()).status, 400);
  assert.equal(users[0].wins, 0);
});
