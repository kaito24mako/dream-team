const path = require("path");

//* require env variables
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

//* export config options for our server
module.exports = {
  port: process.env.PORT || 3001,
  db: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // for MAC, password default should be "root"
    options: {
      // dialect - tells sequelize which db engine you are using
      dialect: process.env.DIALECT,
      // host - where the db is hosted
      host: process.env.HOST,
      // port - which port the db uses for connections
      port: process.env.DB_PORT,
    },
  },
  // for authentication
  auth: {
    jwtSecret: process.env.JWT_SECRET,
  },
};
