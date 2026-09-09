const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 30],
      isAscii: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      len: [5, 255],
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currency: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  wins: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  losses: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  totalCards: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = User;
