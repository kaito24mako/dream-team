const express = require("express");
const db = require("../models");
const auth = require("../middleware/auth");
const { User } = db;
const router = express.Router();

//** User routes

// league coin amounts, ordered from level 1 to 10
const REWARDS = [100, 150, 200, 250, 300, 400, 500, 600, 800, 1000];
const PENALTIES = [0, 0, 50, 50, 100, 100, 200, 300, 400, 500];

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

//* edit user
// usage: my account page
router.put("/:id/edit", auth, async (req, res) => {
  if (String(req.params.id) !== String(req.user.userId)) {
    return res.status(403).json({ message: "Access denied" });
  }

  try {
    const user = await User.findByPk(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // allow only profile fields
    const updates = {};
    for (const field of ["name", "email", "teamName"]) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    await user.update(updates);

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      teamName: user.teamName,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to edit user" });
  }
});

//* delete user
// usage: TESTING
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

//* save the signed-in user's match result
// usage: for battles
router.post("/matches/result", auth, async (req, res) => {
  const { isWinner, level } = req.body || {};

  // only accept a win/loss and a valid league level
  if (
    typeof isWinner !== "boolean" ||
    !Number.isInteger(level) ||
    level < 1 ||
    level > REWARDS.length
  ) {
    return res.status(400).json({ message: "Invalid match result or level." });
  }

  try {
    // save the record and coins together
    const result = await db.sequelize.transaction(async (transaction) => {
      const user = await User.findByPk(req.user.userId, {
        transaction,
        // stop simultaneous matches from overwriting each other
        lock: transaction.LOCK.UPDATE,
      });

      if (!user) return null;
      if (isWinner) user.wins += 1;
      else user.losses += 1;

      const coins = isWinner ? REWARDS[level - 1] : -PENALTIES[level - 1];

      // coins cannot fall below zero
      user.currency = Math.max(0, user.currency + coins);
      await user.save({ transaction });

      return { wins: user.wins, losses: user.losses, currency: user.currency };
    });

    if (!result) return res.status(404).json({ message: "User not found" });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save match result." });
  }
});

module.exports = router;
