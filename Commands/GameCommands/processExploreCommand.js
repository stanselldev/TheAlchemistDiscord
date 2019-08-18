import { displayAreas } from './displayAreas'
import { db } from '../../Database/database'

export async function processExploreCommand(msg, args) {
    let reactions = []

    // Display available areas
    let msgOut = await displayAreas(msg, args, reactions)
    
    // Gather user reaction selection
    for (let i = 0; i < reactions.length; i++) {
        await msgOut.react(reactions[i])
    }
    
    const filter = (reaction, user) => {
        return user.id === msgOut.author.id
    }
    let reaction = await msgOut.awaitReactions(filter, { max: 1, time: 30000})
    console.log(reaction)

    // Update database

}