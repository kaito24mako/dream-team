const db = require("../../models");
const { Player } = db;

const PACKS = {
  basic: {
    price: 300,
    odds: {
      Common: 60,
      Rare: 30,
      Superstar: 8,
      Legendary: 2,
    },
  },

  premium: {
    price: 500,
    odds: {
      Common: 30,
      Rare: 40,
      Superstar: 20,
      Legendary: 10,
    },
  },

  hallOfFame: {
    price: 1000,
    odds: {
      Common: 0,
      Rare: 40,
      Superstar: 35,
      Legendary: 25,
    },
  },
};

function getRandomRarity(odds) {
  const random = Math.random() * 100;

  let cumulative = 0;

  for (const [rarity, chance] of Object.entries(odds)) {
    cumulative += chance;

    if (random < cumulative) {
      return rarity;
    }
  }
}

async function getRandomPlayer(packType) {
  const pack = PACKS[packType];

  if (!pack) {
    throw new Error("Invalid pack type");
  }

  // determine rarity
  const rarity = getRandomRarity(pack.odds);

  // get players of that rarity
  const players = await Player.findAll({
    where: {
      rarity,
    },
  });

  if (players.length === 0) {
    throw new Error(`No ${rarity} players found`);
  }

  // choose random player
  const randomIndex = Math.floor(Math.random() * players.length);

  // returns the random player
  return players[randomIndex];
}

module.exports = {
  PACKS,
  getRandomPlayer,
};
