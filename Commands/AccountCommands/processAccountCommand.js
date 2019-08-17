import { createAccount } from "./createAccount"
import { viewAccount } from "./viewAccount"
import { deleteAccount } from "./deleteAccount"

export function processAccountCommand(msg, args, command) {
    if (!args[0]) {
        viewAccount(msg)
    } else if (args[0] == "create" || args[0] == "c") {
        createAccount(msg)
    } else if (args[0] == "delete" || args[0] == "d") {
        deleteAccount(msg)
    }
}
