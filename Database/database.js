import admin from "firebase-admin"
import { SERVICE_ACCOUNT, DATABASE_URL } from "../tokens"

admin.initializeApp({
  credential: admin.credential.cert(SERVICE_ACCOUNT),
  databaseURL: DATABASE_URL
});

export const db = admin.firestore()