// bring in express, config, sequelize, our database, cors, and required modules
const express = require("express");
const config = require("./config/config");
const db = require("./models");
const cors = require("cors");

// initialise express app variable
const app = express();

// destructure the models to use in our routes
const { Player } = db;

// initialise middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//* routes

// Get all players
// path: /api/players
// name: get all players
// request: GET
// type: public route
app.get("/api/players", async (req, res) => {
  console.log("/api/players - GET");

  const players = await Player.findAll();
  console.log(players);

  res.status(200).send(players);
});

app.get("/api/products/edit/:id", (req, res) => {
  console.log("/api/products/edit/:id - GET by ID");
  res.status(200).send("Get a product by ID");
});

app.post("/api/players/add", async (req, res) => {
  console.log("/api/players/add - POST");

  // create and send data to our database - will be saved to the Players model
  // const player = await Player.create({
  //   fullName: "Kaito Watanabe",
  //   position: "SF",
  //   rarity: "Legendary",
  //   offensiveRating: 96,
  //   defensiveRating: 98,
  //   overallRating: 97,
  //   image: "player24",
  // });

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

  // get a response back from the db
  // either an error or the record created
  console.log(player.toJSON());

  // send a response from the db to the client
  res.status(200).send(player);
});

app.put("/api/products/edit/:id", (req, res) => {
  console.log("/api/products/edit/:id - PUT by ID");
  res.status(200).send("Update a product by ID");
});

app.delete("/api/products/edit/:id", (req, res) => {
  console.log("/api/products/edit/:id - DELETE by ID");
  res.status(200).send("Delete a product by ID");
});

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
