import { helpCommand } from "./helpCommand"
import { processAccountCommand } from "./AccountCommands/processAccountCommand"
import { processExploreCommand } from './GameCommands/processExploreCommand'

export function processCommand(msg) {
    let fullCommand = msg.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let command = splitCommand[0]
    let args = splitCommand.slice(1)

    if (command == "help" || command == "h") {
        helpCommand(args, msg)

    } else if (command == "account" || command == "acc") {
        processAccountCommand(msg, args, command)

    } else if (command == "explore") {
        processExploreCommand(msg, args)
        
    }
}
