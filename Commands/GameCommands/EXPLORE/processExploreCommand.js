import { displayAreas } from './displayAreas'
import { processSelection } from './processSelection'
import { getAccount } from '../../AccountCommands/getAccount'

export async function processExploreCommand(msg, args) {
    
    // Get user account for updating area info on database
    let account = await getAccount(msg)

    // Set up reactions array to pass through displayAreas
    let reactions = []

    // Display available areas for user to choose from
    let msgOut = await displayAreas(msg, args, reactions, account)
    
    // Add reactions for user to choose from
    for (let i = 0; i < reactions.length; i++) {
        await msgOut.react(reactions[i])
    }

    // Filter to be used in the reaction collector to make sure we only capture the original user's reactions
    const filter = (reaction, user) => {
        return user.id === msg.author.id
    }

    // Collect reactions from user and send through to be processed
    msgOut.awaitReactions(filter, { max: 1, time: 5000} )
        .then(collected => {
            let selection = collected.first().emoji.id
            selection != null ? processSelection(msg, selection, account) : null
        })
}