const db = require("../../models");

const { Player } = db;

const PACKS = {
  basic: {
    price: 100,
    odds: {
      Common: 70,
      Rare: 25,
      Superstar: 4,
      Legendary: 1,
    },
  },

  premium: {
    price: 250,
    odds: {
      Common: 30,
      Rare: 50,
      Superstar: 17,
      Legendary: 3,
    },
  },

  hallOfFame: {
    price: 500,
    odds: {
      Common: 0,
      Rare: 20,
      Superstar: 60,
      Legendary: 20,
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

// async function randomPlayer() {
//   const player = await getRandomPlayer("basic");
//   console.log(player);
// }
// randomPlayer();
