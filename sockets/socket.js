const { io } = require("../index");

// Sockets messages
io.on("connection", (client) => {
  console.log("Cliente conectado");

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
    client.broadcast.emit('nuevo-mensaje', payload); // esto emite a todos menos al que lo emitió
  });
});
