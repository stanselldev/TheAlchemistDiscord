const { DISCORD_BOT_SECRET } = require("./tokens")
const { processCommand } = require('./Commands/processCommand')
const Discord = require('discord.js')

const Client = new Discord.Client()

Client.on('ready', () => {
    console.log(`Bot "${Client.user.username}" connected.`)
})

Client.on('message', msg => {
    // console.log(msg.content)

    if (msg.author == Client.user) {
        return
    }

    if (msg.content.startsWith("!")) {
        processCommand(msg)
    }
})

Client.login(DISCORD_BOT_SECRET)
