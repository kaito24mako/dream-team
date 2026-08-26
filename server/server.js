// bring in express, config, sequelize, our database, cors, and required modules
const express = require("express");
const config = require("./config/config");
const db = require("./models");
const cors = require("cors");

// initialise express app variable
const app = express();

// destructure the models to use in our routes
const { Player } = db;
const { User } = db;
const { UserPlayer } = db;

// initialise middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//** routes

// * UserPlayer

// get all players of a user
app.get("/api/users/:id/players", async (req, res) => {
  console.log("/api/users/:id/players - GET");

  const userPlayers = await UserPlayer.findAll();
  console.log(userPlayers);

  res.status(200).send(userPlayers);
});

// create a player for a user
app.post("/api/users/:id/players/add", async (req, res) => {
  console.log("/api/users/:id/players/add - POST");

  const { userId, playerId, quantity } = req.body;

  const userPlayer = await UserPlayer.create({
    userId,
    playerId,
    quantity,
  });

  res.status(200).send(userPlayer);
});

// * Player

// get all players
app.get("/api/players", async (req, res) => {
  console.log("/api/players - GET");

  const players = await Player.findAll();
  console.log(players);

  res.status(200).send(players);
});

// create new player
app.post("/api/players/add", async (req, res) => {
  console.log("/api/players/add - POST");

  // destructure the request
  const {
    fullName,
    position,
    rarity,
    offensiveRating,
    defensiveRating,
    overallRating,
    image,
  } = req.body;

  // to create a player in postman
  const player = await Player.create({
    fullName,
    position,
    rarity,
    offensiveRating,
    defensiveRating,
    overallRating,
    image,
  });

  // send a response from the db to the client
  res.status(200).send(player);
});

// * User

// get all users
app.get("/api/users", async (req, res) => {
  console.log("/api/users - GET");

  const users = await User.findAll();
  console.log(users);

  res.status(200).send(users);
});

// create new user
app.post("/api/users/add", async (req, res) => {
  console.log("/api/users/add - POST");

  // destructure the request
  const {
    fullName,
    username,
    password,
    teamName,
    currency,
    wins,
    losses,
    totalCards,
  } = req.body;

  // to create a user in postman
  const user = await User.create({
    fullName,
    username,
    password,
    teamName,
    currency,
    wins,
    losses,
    totalCards,
  });

  // send a response from the db to the client
  res.status(200).send(user);
});

// app.get("/api/products/edit/:id", (req, res) => {
//   console.log("/api/products/edit/:id - GET by ID");
//   res.status(200).send("Get a product by ID");
// });

// app.put("/api/products/edit/:id", (req, res) => {
//   console.log("/api/products/edit/:id - PUT by ID");
//   res.status(200).send("Update a product by ID");
// });

// app.delete("/api/products/edit/:id", (req, res) => {
//   console.log("/api/products/edit/:id - DELETE by ID");
//   res.status(200).send("Delete a product by ID");
// });

async function startServer() {
  try {
    await db.sequelize.authenticate();
    console.log("MySQL connection successful!");

    // creates the tables from our code to the database
    // sync({alter: true}) = only makes changes to differences in tables
    await db.sequelize.sync({ alter: true });
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
