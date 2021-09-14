import { get, set } from 'local-storage'

const checkFirebaseConfig = () => {
  const isConfig = get('firebase')
  if (!isConfig) {
    set('current-page', 'setting')
    set('current-anchor', 'database')
    return false
  }

  return true
}

export default checkFirebaseConfig
