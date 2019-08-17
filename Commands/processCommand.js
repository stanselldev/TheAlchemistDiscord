const { helpCommand } = require("./helpCommand")
const { processAccountCommand } = require("./AccountCommands/processAccountCommand")

function processCommand(msg) {
    let fullCommand = msg.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let command = splitCommand[0]
    let args = splitCommand.slice(1)

    if (command == "help") {
        helpCommand(args, msg)

    } else if (command == "account" || command == "acc") {
        processAccountCommand(msg, args, command)
    }
}

module.exports = {
  processCommand
}
