/* eslint-disable import/no-mutable-exports */
import { get } from 'local-storage'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseLocalStore = JSON.parse(get('firebase'))

let db = null
let auth = null

if (firebaseLocalStore) {
  const firebaseConfig = {
    apiKey: firebaseLocalStore.apiKey,
    authDomain: firebaseLocalStore.authDomain,
    projectId: firebaseLocalStore.projectId,
    storageBucket: firebaseLocalStore.storageBucket,
    messagingSenderId: firebaseLocalStore.messagingSenderId,
    appId: firebaseLocalStore.appId,
    measurementId: firebaseLocalStore.measurementId
  }

  // firebase init - add your own config here
  firebase.initializeApp(firebaseConfig)

  // collection references
  // const usersCollection = db.collection('users')
  // const tireCollection = db.collection('tire')
  // const alloyCollection = db.collection('alloy')

  // export utils/refs

  db = firebase.firestore()
  auth = firebase.auth()
}

export { db, auth }
