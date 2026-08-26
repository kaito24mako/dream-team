const { Sequelize } = require("sequelize");
const config = require("./config");

//* connect mysql db with sequelize
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options,
);

module.exports = sequelize;
