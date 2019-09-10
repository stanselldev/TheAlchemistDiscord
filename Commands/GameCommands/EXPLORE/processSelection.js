import { areas } from '../../../GameInfo/instanceData'
import { db } from '../../../Database/database'
export async function processSelection(msg, selection, account) {
    const area = areas.filter(i => i.emoji == selection)[0]

    let activeInstance = {
        active: true,
        name: area.name,
        type: "area",
        minutes: area.minutes,
        startTime: Math.round(new Date().getTime() / 1000)
    }

    account.activeInstance = activeInstance

    db.collection("accounts").doc(account.userId).update({
        ...account
    }).catch(err => console.log(err))

}