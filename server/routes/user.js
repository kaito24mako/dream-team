const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../models");

const { User, Player } = db;
const router = express.Router();

//** User routes

//* get all users
// usage: TESTING
router.get("/", async (req, res) => {
  console.log("/api/users - GET");

  const users = await User.findAll();

  res.status(200).send(users);
});

//* get a user by id
// usage: TESTING
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    where: { id: id },
  });

  res.status(200).send(user);
});

//* get a user with all their players
// usage: AppLayout.jsx, BattleLayout.jsx
router.get("/:id/user-and-players", async (req, res) => {
  const { id } = req.params;

  // includes the entire Player object
  // and the quantity of the userPlayer
  const user = await User.findByPk(id, {
    include: {
      model: Player,
      through: {
        attributes: ["quantity", "inLineup"],
      },
    },
  });

  // order Players by position
  const positionOrder = ["PG", "SG", "SF", "PF", "C"];
  const orderedPlayers = user.Players.sort(
    (a, b) =>
      positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position),
  );

  res.status(200).send(user);
});

//* get all players of a user
// usage: NONE - REDUNDANT
router.get("/:id/players", async (req, res) => {
  const { id } = req.params;

  // includes the entire Player object
  // and the quantity & lineup from UserPlayer
  const user = await User.findByPk(id, {
    include: {
      model: Player,
      through: {
        attributes: ["quantity", "inLineup"],
      },
    },
  });

  res.status(200).send(user.Players);
});

//* create new user
// usage: REDUNDANT WITH AUTH ROUTE - only for testing
router.post("/add", async (req, res) => {
  console.log("/api/users/add - POST");

  try {
    // destructure the request
    const {
      name,
      email,
      password,
      teamName,
      currency,
      wins,
      losses,
      totalCards,
      isAdmin,
    } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    // hash the password so users created through this test route can log in
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // to create a user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      teamName,
      currency,
      wins,
      losses,
      totalCards,
      isAdmin,
    });

    const { password: _password, ...userWithoutPassword } = user.toJSON();

    // send a response from the db to the client
    res.status(200).send(userWithoutPassword);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
});

//* delete user
router.delete("/:id", async (req, res) => {
  console.log("/api/users/:id - DELETE");

  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).send({ message: "User not found" });

    await user.destroy();

    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to delete user" });
  }
});

module.exports = router;
