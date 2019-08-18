import { areas } from '../../GameInfo/instanceData'

export function formatAreasEmbed(account, reactions) {
    let fieldList = []
    let { highestArea } = account

    for (let i = 0; i < highestArea.area; i++) {
        if ((i + 1) % 3 == 0) {
            fieldList.push({
                name: "\u200B",
                value: "\u200B"
            })
        }

        let value = "```"
        if (areas[i].area < highestArea.area) {
            for (let d = 0; d < areas[i].drops.length; d++) {
                value += `\n${areas[i].drops[d].name}`
            }
        } else if (areas[i].area == highestArea.area) {
            for (let d = 0; d < areas[i].drops.length; d++) {
                if (highestArea.drops[d] == false) {
                    value += `\n?`
                } else {
                    value += `\n${areas[i].drops[d].name}`
                } 
            }
        }
        value += '```'
        let field = {
            name: `**${i+1}: ${areas[i].name}**`,
            value,
            inline: true
        }
        fieldList.push(field)
        reactions.push(areas[i].emoji)
    }
    
    if (highestArea.area % 2 != 0) {
        fieldList.push({
            name: "\u200B",
            value: "\u200B",
            inline: true
        })
    }

    return {
        title: "EXPLORE",
        description: "Please choose an area you would like to explore, brave alchemist!",
        color: 3204929,
        fields: fieldList
    }
}