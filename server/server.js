// bring in express, config, sequelize, our database, cors, and required modules
const express = require("express");
const config = require("./config/config");
const db = require("./models");
const cors = require("cors");

// initialise express app variable
const app = express();

// destructure the models to use in our routes
const { User, Player, UserPlayer } = db;

// initialise middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//** User - routes

//* get all users
// usage: TESTING
app.get("/api/users", async (req, res) => {
  console.log("/api/users - GET");

  const users = await User.findAll();

  res.status(200).send(users);
});

//* get a user by id
// usage: TESTING
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    where: { id: id },
  });

  res.status(200).send(user);
});

//* get a user with all their players
// usage: AppLayout.jsx, BattleLayout.jsx
app.get("/api/users/:id/user-and-players", async (req, res) => {
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
app.get("/api/users/:id/players", async (req, res) => {
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
app.post("/api/users/add", async (req, res) => {
  console.log("/api/users/add - POST");

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

  // to create a user in postman
  const user = await User.create({
    name,
    email,
    password,
    teamName,
    currency,
    wins,
    losses,
    totalCards,
    isAdmin,
  });

  // send a response from the db to the client
  res.status(200).send(user);
});

//** Player - routes

//* get all players
// usage: PacksPage.jsx
app.get("/api/players", async (req, res) => {
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
app.post("/api/players/add", async (req, res) => {
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

//** UserPlayer - routes

//* get all players of a user
// usage: TESTING
app.get("/api/users/:id/userPlayers", async (req, res) => {
  console.log("/api/users/:id/userPlayers - GET");

  const { id } = req.params;

  const userPlayers = await UserPlayer.findAll({
    where: {
      userId: id,
    },
  });

  res.status(200).send(userPlayers);
});

//* create a player for a user
app.post("/api/users/:id/players/add", async (req, res) => {
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

//* get the lineup
// usage: AppLayout.jsx
app.get("/api/users/:id/lineup", async (req, res) => {
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
app.put("/api/users/:id/lineup/add", async (req, res) => {
  try {
    const { id } = req.params;
    const { playerId } = req.body;

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

    // add the new player
    userPlayer.inLineup = true;

    await userPlayer.save();

    res.status(200).send(userPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Failed to add player to lineup",
    });
  }
});

//* remove a player from the lineup
// usage: LineupPosition.tsx
app.put("/api/users/:id/lineup/remove", async (req, res) => {
  try {
    const { id } = req.params;
    const { playerId } = req.body;

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

    userPlayer.inLineup = false;

    await userPlayer.save();

    res.status(200).send(userPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Failed to remove player from lineup",
    });
  }
});

async function startServer() {
  try {
    await db.sequelize.authenticate();
    console.log("MySQL connection successful!");

    // creates the tables from our code to the database
    // sync({alter: true}) = only makes changes to differences in tables
    await db.sequelize.sync();
    console.log("Database synced successfully");

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
    process.exit(1);
  }
}
startServer();
