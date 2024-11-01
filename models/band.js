const { v4: uuidV4 } = require("uuid");

class Band {
  construtor(name = "no-name") {
    this.id = uuidV4; // identificador único
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Band;
