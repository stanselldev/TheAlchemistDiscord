import { helpCommand } from "./helpCommand"
import { processAccountCommand } from "./AccountCommands/processAccountCommand"

export function processCommand(msg) {
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
