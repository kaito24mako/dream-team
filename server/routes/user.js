const express = require("express");
const db = require("../models");

const { User } = db;
const router = express.Router();

//** User routes

//* get all users
// usage: TESTING
router.get("/", async (req, res) => {
  console.log("/api/users - GET");

  const options = {
    attributes: { exclude: ["password", "createdAt", "updatedAt"] },
  };

  const users = await User.findAll(options);

  res.status(200).send(users);
});

//* get a user by id
// usage: TESTING
router.get("/:id", async (req, res) => {
  console.log("/api/users/:id - GET");

  const { id } = req.params;

  const user = await User.findByPk(id, {
    where: { id: id },
  });

  res.status(200).send(user);
});

//* create user
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

    // hash the password
    const hashedPassword = await User.prototype.hashPassword(password);
    console.log("Hashed password:", hashedPassword);

    // create the user
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

//* edit user
router.put("/:id/edit", async (req, res) => {
  console.log("/api/users/:id/edit - PUT");

  const { id } = req.params;

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

  try {
    const updateData = {
      name,
      email,
      teamName,
      currency,
      wins,
      losses,
      totalCards,
      isAdmin,
    };

    // Only update password if the user entered a new one
    if (password) {
      updateData.password = await User.prototype.hashPassword(password);
    }

    const [updatedRows] = await User.update(updateData, {
      where: { id: id },
    });

    if (updatedRows === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    const options = {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    };

    const user = await User.findByPk(id, options);

    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to edit user" });
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

//* edit the currency
router.put("/:id/edit/currency", async (req, res) => {
  const { id } = req.params;
  const { currency } = req.body;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  user.currency = currency;
  await user.save();

  res.status(200).send(user);
});

module.exports = router;
