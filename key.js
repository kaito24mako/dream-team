//* generate key for us to use as JWT_SECRET in .env

const crypto = require("node:crypto");

crypto.generateKey("hmac", { length: 512 }, (err, key) => {
  if (err) throw err;
  console.log("key:", key.export().toString("hex"));
});
