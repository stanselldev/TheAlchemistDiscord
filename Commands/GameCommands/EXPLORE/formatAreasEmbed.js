import { areas } from '../../../GameInfo/instanceData'

export function formatAreasEmbed(account, reactions) {

    // Set field list to populate in the loop and then displayed in the embed
    let fieldList = []

    // Extract the highestArea from the user's account to determine what to show them
    let { highestArea } = account

    // Main loop to populate the embed
    for (let i = 0; i < highestArea.area; i++) {

        // This empty field will be pushed after every two fields to provide better spacing
        if ((i + 1) % 3 == 0) {
            fieldList.push({
                name: "\u200B",
                value: "\u200B"
            })
        }

        // Set value up with ``` for code block; will be concatenated later with an ending ```
        let value = "```"

        // If the area being referenced is NOT the highestArea on the account, then we add ALL drops since 
        // they ALL have to be discovered before the next area can be explored
        if (areas[i].area < highestArea.area) {
            for (let d = 0; d < areas[i].drops.length; d++) {
                value += `\n${areas[i].drops[d].name}`
            }

        // If the area being referenced IS the highestArea, then we check to see from the Account if 
        // the specific drops have been identified yet
        } else if (areas[i].area == highestArea.area) {
            for (let d = 0; d < areas[i].drops.length; d++) {
                if (highestArea.drops[d] == false) {
                    value += `\n?`
                } else {
                    value += `\n${areas[i].drops[d].name}`
                } 
            }
        }

        // Ending concatenate for value completing the code block
        value += '```'

        // Creat the field that will be added to the fieldList array
        let field = {
            name: `**${i+1}: ${areas[i].name}**`,
            value,
            inline: true
        }

        // Add field to fieldList
        fieldList.push(field)

        // Add the applicable emoji to the reactions array to react to in processExploreCommand
        reactions.push(areas[i].emoji)
    }
    
    // This adds an empty field if there would be a big empty space on the field list; provides better spacing
    if (highestArea.area % 2 != 0) {
        fieldList.push({
            name: "\u200B",
            value: "\u200B",
            inline: true
        })
    }

    // Return our embed, ready to be sent to the user back on displayArea
    return {
        title: "EXPLORE",
        description: "Please choose an area you would like to explore, brave alchemist!",
        color: 3204929,
        fields: fieldList
    }
}