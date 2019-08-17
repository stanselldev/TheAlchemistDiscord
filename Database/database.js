const admin = require("firebase-admin");
const { SERVICE_ACCOUNT, DATABASE_URL } = require("../tokens")

admin.initializeApp({
  credential: admin.credential.cert(SERVICE_ACCOUNT),
  databaseURL: DATABASE_URL
});

const db = admin.firestore()

module.exports = {
    db
}
