# dmd.js
DMD.JS is a wrapper to interact with the Discord Bot API. (Based on discordjs-commando)

<a href="https://nodei.co/npm/dmd.js/"><img src="https://nodei.co/npm/dmd.js.png"></a>

# Usage
```
const path = require("path")
const dmd = require("dmd.js")
const client = new dmd.Client("PREFIX", "YOUR-ID (OWNER ID)")

client.login("TOKEN")

client.on("ready", () => {
  console.log("ready!")
})

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['fun', 'Fun commands'],
        ['some', 'Some group'],
        ['other', 'Some other group']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));
```

# Documentation
Comming Soon!
