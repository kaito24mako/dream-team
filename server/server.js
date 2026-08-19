// bring in express and required modules
// initialise express
const express = require("express");
const app = express();

// initialise middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect sequelize to the mysql db
const sequelize = require("./config/database");

// test db connection
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("MySQL connection successful!");
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
  }
}
startServer();
