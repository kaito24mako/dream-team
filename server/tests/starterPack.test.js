const assert = require("node:assert/strict");
const { test, beforeEach } = require("node:test");

// exercise the real service and route without touching the development database
let state;
let failure;
let queue = Promise.resolve();
const positions = ["PG", "SG", "SF", "PF", "C"];
const transaction = { LOCK: { UPDATE: "UPDATE" } };
const db = {
  sequelize: {
    transaction(callback) {
      const result = queue.then(async () => {
        const snapshot = structuredClone(state);
        try {
          return await callback(transaction);
        } catch (error) {
          state = snapshot;
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
      const data = state.users.find((user) => user.id === userId);
      if (!data) return null;
      return {
        ...data,
        async save(options) {
          assert.equal(options.transaction, transaction);
          if (failure === "save") throw new Error("Save failed");
          data.hasClaimedStarterPack = this.hasClaimedStarterPack;
        },
      };
    },
  },
  Player: {
    async findAll(options) {
      assert.equal(options.transaction, transaction);
      return state.players.filter((player) => player.rarity === options.where.rarity);
    },
  },
  UserPlayer: {
    async count(options) {
      assert.equal(options.transaction, transaction);
      return state.ownership.filter((row) => row.userId === options.where.userId).length;
    },
    async bulkCreate(rows, options) {
      assert.equal(options.transaction, transaction);
      state.ownership.push(...rows);
      if (failure === "insert") throw new Error("Insert failed");
    },
  },
};

require.cache[require.resolve("../models")] = { exports: db };
const claimStarterPack = require("../services/claimStarterPack");
process.env.JWT_SECRET = "starter-pack-test-secret";
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const router = require("../routes/userPlayer");

beforeEach(() => {
  failure = null;
  state = {
    users: [1, 2].map((id) => ({ id, hasClaimedStarterPack: false, currency: 0 })),
    players: positions.flatMap((position, index) => [
      { id: index + 1, position, rarity: "Common" },
      { id: index + 6, position, rarity: "Rare" },
    ]),
    ownership: [],
  };
});

test("grants exactly one Common player per position, in the lineup, without charging coins", async () => {
  const players = await claimStarterPack(1);
  assert.deepEqual(players.map((player) => player.position), positions);
  assert.ok(players.every((player) => player.rarity === "Common"));
  assert.deepEqual(state.ownership, players.map((player) => ({
    userId: 1, playerId: player.id, quantity: 1, inLineup: true,
  })));
  assert.equal(state.users[0].hasClaimedStarterPack, true);
  assert.equal(state.users[0].currency, 0);
  assert.equal(state.users[1].hasClaimedStarterPack, false);
});

test("rejects subsequent claims even after all ownership records are removed", async () => {
  await claimStarterPack(1);
  state.ownership = [];
  await assert.rejects(claimStarterPack(1), { status: 409 });
  assert.equal(state.ownership.length, 0);
});

test("simultaneous claims grant only five players", async () => {
  const results = await Promise.allSettled([claimStarterPack(1), claimStarterPack(1)]);
  assert.equal(results.filter((result) => result.status === "fulfilled").length, 1);
  const rejected = results.find((result) => result.status === "rejected");
  assert.equal(rejected.reason.status, 409);
  assert.equal(state.ownership.length, 5);
});

test("existing teams cannot claim the new-user gift", async () => {
  state.ownership.push({ userId: 1, playerId: 1, quantity: 1 });
  await assert.rejects(claimStarterPack(1), { status: 409 });
  assert.equal(state.ownership.length, 1);
});

test("missing positions leave eligibility and ownership untouched", async () => {
  state.players = state.players.filter((player) => player.position !== "C");
  await assert.rejects(claimStarterPack(1), { status: 503 });
  assert.equal(state.ownership.length, 0);
  assert.equal(state.users[0].hasClaimedStarterPack, false);
});

for (const operation of ["insert", "save"]) {
  test(`${operation} failure rolls back the gift and allows a later retry`, async () => {
    failure = operation;
    await assert.rejects(claimStarterPack(1));
    assert.equal(state.ownership.length, 0);
    assert.equal(state.users[0].hasClaimedStarterPack, false);
    failure = null;
    await claimStarterPack(1);
    assert.equal(state.ownership.length, 5);
  });
}

test("nonexistent accounts are rejected", async () => {
  await assert.rejects(claimStarterPack(99), { status: 404 });
  assert.equal(state.ownership.length, 0);
});

function request(path, token, body = {}) {
  return new Promise((resolve, reject) => {
    const req = { method: "POST", url: path, body, header: () => token };
    const res = {
      statusCode: 200,
      status(code) { this.statusCode = code; return this; },
      json(data) { resolve({ status: this.statusCode, data }); return this; },
    };
    router.handle(req, res, (error) => reject(error || new Error("Route not found")));
  });
}

test("claim endpoint rejects unauthenticated and invalid-token requests", async () => {
  assert.equal((await request("/starter-pack/claim")).status, 401);
  assert.equal((await request("/starter-pack/claim", "invalid")).status, 401);
  assert.equal(state.ownership.length, 0);
});

test("claim endpoint uses the signed-in account and rejects repeats", async () => {
  const token = jwt.sign({ user: { userId: 1, isAdmin: false } }, config.auth.jwtSecret);
  const result = await request("/starter-pack/claim", token, {
    userId: 2, hasClaimedStarterPack: false, players: [99],
  });
  assert.equal(result.status, 201);
  assert.equal(result.data.players.length, 5);
  assert.ok(state.ownership.every((row) => row.userId === 1));
  assert.equal((await request("/starter-pack/claim", token)).status, 409);
});

test("regular accounts cannot bypass claiming with the direct player grant route", async () => {
  const token = jwt.sign({ user: { userId: 1, isAdmin: false } }, config.auth.jwtSecret);
  assert.equal((await request("/1/players/add")).status, 401);
  assert.equal((await request("/1/players/add", token, { playerId: 1 })).status, 403);
  assert.equal(state.ownership.length, 0);
});
