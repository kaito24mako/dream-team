const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dream_team", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
