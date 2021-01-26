const commando = require("../comando/main")

module.exports = class {
  constructor(prefix, owner) {
    const commandoClientOptions = {
      commandPrefix: prefix,
      owner: owner
    }

    const client = new commando.CommandoClient(comandoClientOptions);

    return client;
  }
}