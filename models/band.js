const uuid = require('uuid');

class Band {
  constructor(name = "no-name") {
    this.id = uuid.v4(); // identificador único
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Band;
