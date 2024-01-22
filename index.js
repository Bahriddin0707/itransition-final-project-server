require("dotenv").config();
const express = require("express");
const app = express();
const winston = require("winston");
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  winston.info(`I started listening on port ${PORT}`);
});
module.exports = server;
