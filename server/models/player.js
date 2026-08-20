const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Player = sequelize.define("Player", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.ENUM("PG", "SG", "SF", "PF", "C"),
    allowNull: false,
  },
  rarity: {
    type: DataTypes.ENUM("Common", "Rare", "Superstar", "Legendary"),
    allowNull: false,
  },
  offensiveRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defensiveRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  overallRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Player;
