import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDB8i5Z7jeW2rIKVX8Cst5-VHOO6BkeOSc",
  authDomain: "edpro-84554.firebaseapp.com",
  projectId: "edpro-84554",
  storageBucket: "edpro-84554.appspot.com",
  messagingSenderId: "857928483043",
  appId: "1:857928483043:web:79eb30a56004eb52a6c5d6"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const storage = getStorage()

export { db, storage }