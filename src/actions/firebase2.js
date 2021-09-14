/* eslint-disable import/no-mutable-exports */
// import { get } from 'local-storage'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// const firebaseLocalStore = JSON.parse(get('firebase'))

let db = null
let auth = null

// if (firebaseLocalStore) {
const firebaseConfig = {
  apiKey: 'AIzaSyCO5wFn5r6ZFFqOZKAmVq67GrihGhyXmpg',
  authDomain: 'stock-management-e02ca.firebaseapp.com',
  projectId: 'stock-management-e02ca',
  storageBucket: 'stock-management-e02ca.appspot.com',
  messagingSenderId: '513299346922',
  appId: '1:513299346922:web:1e4e4a3a3f7fd0e9556e93',
  measurementId: 'G-TQ643N3YDJ'
}

// const firebaseConfig = {
//   apiKey: firebaseLocalStore.apiKey,
//   authDomain: firebaseLocalStore.authDomain,
//   projectId: firebaseLocalStore.projectId,
//   storageBucket: firebaseLocalStore.storageBucket,
//   messagingSenderId: firebaseLocalStore.messagingSenderId,
//   appId: firebaseLocalStore.appId,
//   measurementId: firebaseLocalStore.measurementId
// }

// firebase init - add your own config here
firebase.initializeApp(firebaseConfig)

// collection references
// const usersCollection = db.collection('users')
// const tireCollection = db.collection('tire')
// const alloyCollection = db.collection('alloy')

// export utils/refs

db = firebase.firestore()
auth = firebase.auth()
// }

export { db, auth }
