import { helpCommand } from "./helpCommand"
import { processAccountCommand } from "./AccountCommands/processAccountCommand"
import { processExploreCommand } from './GameCommands/EXPLORE/processExploreCommand'
import { processStatusCommand } from './GameCommands/STATUS/processStatusCommand'
import { processPatchCommand } from "./processPatchCommand";

export function processCommand(msg) {
    let fullCommand = msg.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let command = splitCommand[0]
    let args = splitCommand.slice(1)

    if (command == "help" || command == "h") {
        helpCommand(args, msg)

    } else if (command == "account" || command == "acc") {
        processAccountCommand(msg, args, command)

    } else if (command == "explore" || command == "ex") {
        processExploreCommand(msg, args)

    } else if (command == "status" || command == "st") {
        processStatusCommand(msg, args)
        
    } else if (command == "patch") {
        processPatchCommand(args, msg)
    }
}
