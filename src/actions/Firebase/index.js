import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore/lite'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>'

const firebaseConfig = {
  apiKey: 'AIzaSyDC4qf3ZY-9gxQE0vBWOeXoL5pgH19aYpA',
  authDomain: 'stock-tire.firebaseapp.com',
  projectId: 'stock-tire',
  storageBucket: 'stock-tire.appspot.com',
  messagingSenderId: '723594467057',
  appId: '1:723594467057:web:2c25d903158723036cbb50'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities')
//   const citySnapshot = await getDocs(citiesCol)
//   const cityList = citySnapshot.docs.map(doc => doc.data())
//   return cityList
// }
