const {io} = require('../index');

// Sockets messages
io.on("connection", (client) => {
    console.log("Cliente conectado");
  
    client.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  
    // Para escuchar mensaje emitido desde cliente
    client.on("message", (payload) => {
      console.log("Mensaje", payload);
  
      // Esto emite un mesj a todos los clientes conectados
      io.emit("message", { admin: "New message" });
    });
  });