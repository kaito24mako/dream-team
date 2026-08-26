const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserPlayer = sequelize.define("UserPlayer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "id",
    },
  },
  playerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Player",
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
});

module.exports = UserPlayer;
