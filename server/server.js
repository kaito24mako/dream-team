//* bring in express and required modules
// initialise express
const express = require("express");
const app = express();

//* bring in config file
const config = require("./config/config");

//* initialise middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* connect sequelize to the mysql db
const sequelize = require("./config/database");

//* test db connection
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("MySQL connection successful!");

    await sequelize.sync();
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
  }
}
startServer();

//* listen for requests
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
