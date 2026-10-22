// Bring in winston and morgan
const winston = require("winston");
const morgan = require("morgan");
const { combine, timestamp, json } = winston.format;

// create the logger
// level: specifies the level to log to (checking);
// format: how we want our logs to look.
// transports: Specifies where we are logging to.
const logger = winston.createLogger({
  level: "http",
  format: combine(timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "log.json" }),
  ],
});

// Set up morgan
const morganMiddleware = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: Number.parseFloat(tokens.status(req, res)),
      content_length: tokens.res(req, res, "content-length"),
      response_time: Number.parseFloat(tokens["response-time"](req, res)),
      response_time_ms: tokens["response-time"](req, res) + "ms",
      remote_address: tokens["remote-addr"](req, res),
      remote_user: tokens["remote-user"](req, res),
      date: tokens.date(req, res),
      http_version: tokens["http-version"](req, res),
      user_agent: tokens["user-agent"](req, res),
      referrer: tokens.referrer(req, res),
    });
  },
  {
    stream: {
      write: (message) => {
        const data = JSON.parse(message);
        logger.http(`incoming-request`, data);
      },
    },
  },
);

module.exports.logger = logger;
module.exports = morganMiddleware;
