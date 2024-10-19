const express = require("express");
const path = require("path");

// Este "dotenv" se encarga de leer las env definidas en el archivo
// de igual nombre
require("dotenv").config();

// Express app
const app = express();

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require('./sockets/socket');

// Path público
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log(`Running server on port`, process.env.PORT);
});
