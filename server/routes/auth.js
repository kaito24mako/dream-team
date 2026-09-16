const express = require("express");
const config = require("../config/config");
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const { User } = db;
const router = express.Router();

//** Auth routes

//* login
router.post("/login", async (req, res) => {
  console.log("/api/auth/login - POST");

  const { email, password } = req.body;

  try {
    // check if the user exists
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).send({ message: "Invalid login details" });
    }

    // use bcrypt to check if the entered password matches the password in the db
    // both passwords are hashed and salted
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ message: "Invalid login details" });
    }

    // generate a web token to send to the client, which contains their credentials...

    // create the payload
    const payload = {
      user: {
        userId: user.id,
        name: user.name,
        email: user.email,
        teamName: user.teamName,
        currency: user.currency,
        wins: user.wins,
        losses: user.losses,
        totalCards: user.totalCards,
        isAdmin: user.isAdmin,
      },
    };

    // sign the token
    const token = User.prototype.signToken(payload);
    console.log("Token:", token);
    res.status(200).json({ user: payload.user, token });

    // sign the token and set when it expires
    // jwt.sign(
    //   payload,
    //   config.auth.jwtSecret,
    //   {
    //     expiresIn: "7d",
    //     algorithm: "HS512",
    //   },
    //   (err, token) => {
    //     if (err) throw err;

    //     // send token as a response
    //     res.json({ user: payload.user, token });
    //   },
    // );
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
});

//* register
router.post("/register", async (req, res) => {
  console.log("/api/auth/register - POST");

  const { name, teamName, email, password } = req.body;

  try {
    // check if the user exists
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    // create a new user object
    const newUser = { name, teamName, email, password };

    // hash and salt password
    const hashedPassword = await User.prototype.hashPassword(password);
    newUser.password = hashedPassword;

    // save to database
    const newUserRes = await User.create(newUser);

    // generate a web token to send to the client, which contains their credentials...

    // create the payload
    const payload = {
      user: {
        userId: newUserRes.id,
        name: newUserRes.name,
        email: newUserRes.email,
        teamName: newUserRes.teamName,
        currency: newUserRes.currency,
        wins: newUserRes.wins,
        losses: newUserRes.losses,
        totalCards: newUserRes.totalCards,
        isAdmin: newUserRes.isAdmin,
      },
    };

    // sign the token
    const token = User.prototype.signToken(payload);
    console.log("Token:", token);
    res.status(200).json({ user: payload.user, token });

    // sign the token and set when it expires
    // jwt.sign(
    //   payload,
    //   config.auth.jwtSecret,
    //   {
    //     expiresIn: "7d",
    //     algorithm: "HS512",
    //   },
    //   (err, token) => {
    //     if (err) throw err;

    //     // send token as a response
    //     res.json({ user: payload.user, token });
    //   },
    // );
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
});

//* gets the logged in user
// auth is the middlware - runs before hitting the route
// uses the loadUser action
// ensures after login and refresh, the user stays logged in due to their valid token header
router.get("/", auth, async (req, res) => {
  console.log("/api/auth - GET");

  // set up options for sending back the user without their password
  const options = {
    attributes: { exclude: ["password"] },
  };

  try {
    // get the user
    const user = await User.findByPk(req.user.userId, options);
    console.log("user:", user);
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
