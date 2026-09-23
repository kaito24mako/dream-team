const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

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
  //! dont need!
  totalCards: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  //! dont need!
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

//* add function to User model that signs the token
User.prototype.signToken = function (payload) {
  console.log("Signing token...");
  console.log("Payload:", payload);

  // sign the token with the payload and our secret
  const token = jwt.sign(payload, config.auth.jwtSecret, {
    expiresIn: "7d",
    algorithm: "HS512",
  });

  return token;
};

//* add function to User model that hashes the password
User.prototype.hashPassword = async function (password) {
  console.log("Hashing password...");
  console.log("Password:", password);

  // generate salt with bcrypt
  const salt = await bcrypt.genSalt(12);

  // hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

module.exports = User;
