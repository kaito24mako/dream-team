const sequelize = require("../config/database");
const Player = require("../models/player");
const players = require("./seeders/playerData");

//* to add Player data to MySQL db
async function seedPlayers() {
  try {
    await sequelize.sync();
    await Player.bulkCreate(players);
    console.log("Players seeded successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}
seedPlayers();
