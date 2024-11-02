const { io } = require("../index");
const Band = require("../models/band");
const Bands = require("../models/bands");

const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Héroes del Silencio'));
bands.addBand(new Band('Nino Bravo'));

console.log(bands);

// Sockets messages
io.on("connection", (client) => {
  console.log("Cliente conectado");

  // se emite a usuario que se conecta el estado actual de las bandas
  client.emit('active-bands', bands.getBands());

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  // Para escuchar mensaje emitido desde cliente
  client.on("message", (payload) => {
    console.log("Mensaje", payload);

    // Esto emite un msj a todos los clientes conectados
    io.emit("message", { admin: "New message" });
  });

  // Aquí se emite un mensaje enviado por un cliente específico
  client.on("emitir-mensaje", (payload) => {
    // console.log(payload);
    // io.emit("nuevo-mensaje", payload); esto emite a TODOS!
    client.broadcast.emit("nuevo-mensaje", payload); // esto emite a todos menos al que lo emitió
  });
});
