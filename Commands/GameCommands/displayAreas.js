import { areas } from '../../GameInfo/instanceData'

export async function displayAreas(msg, args) {
    // Display each area
    const embed = {
        "title": "AREAS",
        "description": "Please choose an area you would like to explore, brave alchemist!",
        "color": 3204929,
        "fields": [
          {
            "name": "Peaceful Grotto",
            "value": "Discovered drops:\n?, ?, ?, ?, ?",
            "inline": true
          },
          {
            "name": "Dripping Caverns",
            "value": "Discovered drops:\n?, ?, ?, ?, ?",
            "inline": true
          },
          {
            "name": "Dank Depths",
            "value": "Discovered drops:\n?, ?, ?, ?, ?",
            "inline": true
          }
        ]
      }

    // Allow user to choose one using reactions

    let msgOut = await msg.channel.send({ embed })
    await msgOut.react('612399876956749824')
    await msgOut.react('612401396175732902')
    await msgOut.react('612403117161709588')
}