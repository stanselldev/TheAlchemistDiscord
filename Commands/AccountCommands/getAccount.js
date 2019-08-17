import { db } from '../../Database/database.js'

export async function getAccount(msg) {
  let userId = msg.author.id

  let account = await db.collection("accounts").doc(userId).get()
  .catch(err => console.log(err))
  .then((doc) => {
    return doc.data()
  })

  return account
}
