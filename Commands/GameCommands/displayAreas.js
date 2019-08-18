import { getAccount } from '../AccountCommands/getAccount'
import { formatAreasEmbed } from './formatAreasEmbed'

export async function displayAreas(msg, args, reactions) {
    let account = await getAccount(msg)
    let embed = await formatAreasEmbed(account, reactions)
    let msgOut = await msg.channel.send({ embed })

    return msgOut
}