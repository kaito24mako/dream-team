const express = require("express");
const db = require("../models");

const { User, Player, UserPlayer } = db;
const router = express.Router();

const { PACKS, getRandomPlayer } = require("../utils/helpers/getRandomPlayer");

//==== user and player data ====//

//* get a user with all their players (full details)
// usage: AppLayout.jsx, BattleLayout.jsx
router.get("/:id/user-and-players", async (req, res) => {
  const { id } = req.params;

  // includes the entire Player object and the quantity from userPlayer
  const user = await User.findByPk(id, {
    include: {
      model: Player,
      through: {
        attributes: ["quantity", "inLineup"],
      },
    },
    //! FIX
    exclude: ["password", "updatedAt", "createdAt"],
  });

  // order Players by position
  const positionOrder = ["PG", "SG", "SF", "PF", "C"];
  const orderedPlayers = user.Players.sort(
    (a, b) =>
      positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position),
  );

  res.status(200).send(user);
});

//* get all userPlayers of a user
// usage: TESTING
router.get("/:id/userPlayers", async (req, res) => {
  console.log("/api/users/:id/userPlayers - GET");

  const { id } = req.params;

  const userPlayers = await UserPlayer.findAll({
    where: {
      userId: id,
    },
  });

  res.status(200).send(userPlayers);
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

//* create a player for a user
router.post("/:id/players/add", async (req, res) => {
  console.log("/api/users/:id/players/add - POST");

  const { id } = req.params;
  const { playerId, quantity, inLineup } = req.body;

  const userPlayer = await UserPlayer.create({
    userId: id,
    playerId,
    quantity,
    inLineup,
  });

  res.status(200).send(userPlayer);
});

//====== lineup data =======/

//* get the lineup
// usage: AppLayout.jsx
router.get("/:id/lineup", async (req, res) => {
  console.log("/api/users/:id/lineup - GET");

  const { id } = req.params;

  // get the User with Players and UserPlayers in which "inLineup" is true
  const user = await User.findByPk(id, {
    include: {
      model: Player,
      through: {
        where: {
          inLineup: true,
        },
        attributes: ["quantity", "inLineup"],
      },
    },
  });

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  // order Players by position
  const positionOrder = ["PG", "SG", "SF", "PF", "C"];
  const lineup = user.Players.sort(
    (a, b) =>
      positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position),
  );

  res.status(200).send(lineup);
});

//* add a player to the lineup
router.put("/:id/lineup/add", async (req, res) => {
  console.log("/api/users/:id/lineup/add - POST");

  const { id } = req.params;
  const { playerId } = req.body;

  try {
    // find the player being added
    const player = await Player.findByPk(playerId);

    // make sure the user owns this player
    const userPlayer = await UserPlayer.findOne({
      where: {
        userId: id,
        playerId,
      },
    });

    if (!userPlayer) {
      return res.status(404).send({
        message: "User does not own this player",
      });
    }

    // get the user's current lineup
    const user = await User.findByPk(id, {
      include: {
        model: Player,
        through: {
          where: {
            inLineup: true,
          },
        },
      },
    });

    // find the player already in the lineup with the same position
    const existingPlayer = user.Players.find(
      (exPlayer) => exPlayer.position === player.position,
    );

    // remove the existing player from the lineup
    if (existingPlayer) {
      await UserPlayer.update(
        { inLineup: false },
        { where: { userId: id, playerId: existingPlayer.id } },
      );
    }

    // add player to the lineup
    userPlayer.inLineup = true;

    await userPlayer.save();

    res.status(200).send(userPlayer);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to add player to lineup" });
  }
});

//* remove a player from the lineup
// usage: LineupPosition.tsx
router.put("/:id/lineup/remove", async (req, res) => {
  console.log("/api/users/:id/lineup/remove - POST");

  const { id } = req.params;
  const { playerId } = req.body;

  try {
    // make sure the user owns the player
    const userPlayer = await UserPlayer.findOne({
      where: {
        userId: id,
        playerId,
      },
    });

    if (!userPlayer) {
      return res.status(404).send({
        message: "User does not own this player",
      });
    }

    // remove player from lineup
    userPlayer.inLineup = false;

    await userPlayer.save();

    res.status(200).send(userPlayer);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to remove player from lineup" });
  }
});

//===== pack opening =======/

router.post("/:id/packs/:packType/open", async (req, res) => {
  try {
    const { id, packType } = req.params;

    const pack = PACKS[packType];

    if (!pack) {
      return res.status(400).json({
        message: "Invalid pack type",
      });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // check coins
    if (user.currency < pack.price) {
      return res.status(400).json({
        message: "Not enough coins!",
      });
    }

    // generate random player
    const selectedPlayer = await getRandomPlayer(packType);

    // check if user already owns player
    const [userPlayer, created] = await UserPlayer.findOrCreate({
      where: {
        userId: id,
        playerId: selectedPlayer.id,
      },
      defaults: {
        quantity: 1,
      },
    });

    // for duplicate cards
    if (!created) {
      userPlayer.quantity += 1;
      await userPlayer.save();
    }

    // subtract pack price
    user.currency -= pack.price;
    await user.save();

    res.status(200).json({
      message: "Pack opened!",
      player: selectedPlayer,
      quantity: userPlayer.quantity,
      currency: user.currency,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to open pack",
    });
  }
});

module.exports = router;
