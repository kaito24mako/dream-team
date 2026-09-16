const express = require("express");
const db = require("../models");

const { Player } = db;
const router = express.Router();

//** Player routes

//* get all players
// usage: PacksPage.jsx
router.get("/", async (req, res) => {
  console.log("/api/players - GET");

  const players = await Player.findAll();

  // order players by position
  const positionOrder = ["PG", "SG", "SF", "PF", "C"];
  const orderedPlayers = players.sort(
    (a, b) =>
      positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position),
  );

  res.status(200).send(orderedPlayers);
});

//* create new player
router.post("/add", async (req, res) => {
  console.log("/api/players/add - POST");

  const {
    fullName,
    position,
    rarity,
    offensiveRating,
    defensiveRating,
    overallRating,
    image,
  } = req.body;

  const player = await Player.create({
    fullName,
    position,
    rarity,
    offensiveRating,
    defensiveRating,
    overallRating,
    image,
  });

  res.status(200).send(player);
});

module.exports = router;
