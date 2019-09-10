import { getAccount } from '../../../Commands/AccountCommands/getAccount'
import { db } from '../../../Database/database'
import { areas } from '../../../GameInfo/instanceData'

export async function processStatusCommand(msg, args) {
    const account = await getAccount(msg)

    // Get activeInstance: active, instanceMinutes, startTime, and instanceName
    const { active, minutes, name, number, startTime, type } = account.activeInstance
    const { inventory } = account

    // Check if active
    if (!active) {

        // Let user know they do not have an active instance
        msg.channel.send(```You currently don't have any active instance.```)
    }

    // Convert instanceMinutes to seconds; ttc = time to complete
    const ttc = minutes * 60

    // Check if (instanceSeconds + startTime) > currentTime
    const currentTime = Math.round(new Date().getTime() / 1000)
    const timeElapsed = startTime + ttc

    if (timeElapsed < currentTime) {

        // Process winnings
        // let updatedInventory = await processInstanceReturns(msg, inventory) 
        let area = areas.filter(area => area.area == number)
        console.log(area)

        let updatedInventory

        // Add winnings
        account.inventory = {
            ...updatedInventory
        }

        console.log(account.inventory)

        // Reset activeInstance data
        account.activeInstance = {
            active: false,
            instanceMinutes: null,
            instanceName: null,
            instanceType: null,
            startTime: null
        }

        // Update user on database 
        // db.collection("accounts")
        //     .doc(account.userId)
        //     .update({...account})
        //     .catch(err => console.log(err))

    } else {

        // Let user know how much time they have left
        const timeRemaining = timeElapsed - currentTime
    }
}