import { db } from '../../Database/database.js'

export function createAccount(msg) {
    let newAccount = true
    let userId = msg.author.id
    let username = msg.author.username

    db.collection("accounts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.data().userId == userId) {
                msg.channel.send(`\`\`\` Account already exists. \`\`\``)
                newAccount = false
            }
        });

        if (newAccount) {
            db.collection("accounts").doc(userId).set({
                username: username,
                userId,
                inventory: {},
                instance: {
                        active: false,
                        startTime: null,
                        instanceId: null
                    }
                })
            msg.channel.send(`\`\`\`Account successfully created.\`\`\``)
        }
    }).catch((err) => {
        console.log('Error getting documents: ', err);
    });
}
