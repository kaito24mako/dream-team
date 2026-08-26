const db = require("../models");
const players = require("./playersData");
const { Player } = db;

//* to add player data from playersData.js to the db
async function seedPlayers() {
  try {
    await db.sequelize.sync();
    await Player.bulkCreate(players, {
      updateOnDuplicate: [
        "fullName",
        "position",
        "rarity",
        "offensiveRating",
        "defensiveRating",
        "overallRating",
        "image",
      ],
    });
    console.log("Players seeded successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await db.sequelize.close();
  }
}
seedPlayers();
