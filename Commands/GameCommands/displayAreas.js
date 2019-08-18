import { getAccount } from '../AccountCommands/getAccount'
import { formatAreasEmbed } from './formatAreasEmbed'

export async function displayAreas(msg, args, reactions) {
    let account = await getAccount(msg)
    let embed = await formatAreasEmbed(account, reactions)
    let msgOut = await msg.channel.send({ embed })

    for (let i = 0; i < reactions.length; i++) {
        await msgOut.react(reactions[i])
    }

    return msgOut
}