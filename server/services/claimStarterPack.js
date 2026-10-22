const db = require("../models");

const POSITIONS = ["PG", "SG", "SF", "PF", "C"];

function claimError(status, message) {
  return Object.assign(new Error(message), { status });
}

async function claimStarterPack(userId) {
  return db.sequelize.transaction(async (transaction) => {
    // serialize claims for this account, including requests from other devices
    const user = await db.User.findByPk(userId, {
      transaction,
      lock: transaction.LOCK.UPDATE,
    });

    if (!user) throw claimError(404, "User not found");
    if (user.hasClaimedStarterPack) {
      throw claimError(409, "You have already claimed your starter players.");
    }

    const ownedPlayers = await db.UserPlayer.count({
      where: { userId },
      transaction,
    });
    if (ownedPlayers > 0) {
      throw claimError(409, "Starter players are only available to new teams.");
    }

    const candidates = await db.Player.findAll({
      where: { rarity: "Common" },
      transaction,
    });
    const players = POSITIONS.map((position) => {
      const pool = candidates.filter((player) => player.position === position);
      if (pool.length === 0) {
        throw claimError(503, "Starter players are unavailable. Please try again later.");
      }
      return pool[Math.floor(Math.random() * pool.length)];
    });

    await db.UserPlayer.bulkCreate(
      players.map((player) => ({
        userId,
        playerId: player.id,
        quantity: 1,
        inLineup: true,
      })),
      { transaction },
    );

    user.hasClaimedStarterPack = true;
    await user.save({ transaction });

    return players;
  });
}

module.exports = claimStarterPack;
