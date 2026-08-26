// this file holds our database models
// it allows the server to create the tables in the database
const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user");
const Player = require("./player");
const UserPlayer = require("./userPlayer");

// model relationships
User.belongsToMany(Player, {
  through: UserPlayer,
  foreignKey: "userId",
  otherKey: "playerId",
});

Player.belongsToMany(User, {
  through: UserPlayer,
  foreignKey: "playerId",
  otherKey: "userId",
});

// create db object - export at the end of this file
let db = {};

// sets up access variables and allows us to use the Sequelize class
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// add models to the db object
db.User = User;
db.Player = Player;
db.UserPlayer = UserPlayer;

module.exports = db;
module.exports.Op = Sequelize.Op;
