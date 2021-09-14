import moment from 'moment'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite'

import { db } from '../firebase'

const alloyAction = {
  getData: async ({
    amount,
    source,
    price,
    priceType,
    totalPrice,
    sellDate
  }) => {
    const tstSnapshot = await setDoc(doc(db, 'transaction_sell_tire'), {
      tire_id: source.id,
      type: priceType,
      amount: amount.value,
      price: price.value,
      total: totalPrice.toString(),
      createdAt: moment(sellDate).format('DD/MM/YYYY')
    })

    console.log('tstSnapshot', tstSnapshot)
  }
}

export { alloyAction }
