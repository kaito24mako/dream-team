const jwt = require("jsonwebtoken");
const config = require("../config/config");

//* check if the user has a token or not
// usage: before every endpoint is called
module.exports = function (req, res, next) {
  // get the token from the header
  const token = req.header("x-auth-token");

  console.log("Token in middleware:", token);

  // deny access if there's no token
  if (!token) {
    return res
      .status(401)
      .json({ message: "No token, authorisation is denied" });
  }

  try {
    console.log("Decoding token...");

    // unhash token and attach to user's header
    const decoded = jwt.verify(token, config.auth.jwtSecret);
    req.user = decoded.user;

    // call the next middleware
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
