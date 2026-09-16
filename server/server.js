// bring in express, config, sequelize, our database, cors, middleware, and required modules
const express = require("express");
const config = require("./config/config");
const db = require("./models");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const playerRoutes = require("./routes/player");
const userPlayerRoutes = require("./routes/userPlayer");

// initialise express app variable
const app = express();

// initialise middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// use imported routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/users", userPlayerRoutes);

// start up the server
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
  } catch (err) {
    console.error("Unable to connect to MySQL:", err);
    process.exit(1);
  }
}
startServer();
