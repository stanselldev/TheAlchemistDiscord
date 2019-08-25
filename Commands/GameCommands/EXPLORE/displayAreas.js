import { formatAreasEmbed } from './formatAreasEmbed'

export async function displayAreas(msg, args, reactions, account) {

    // Format the embed that will be passed back to the user displaying the areas
    let embed = await formatAreasEmbed(account, reactions)

    // Send the embed back to the user
    let msgOut = await msg.channel.send({ embed })

    // Return the msgOut so we can react to it in processExploreCommand
    return msgOut
}