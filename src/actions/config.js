import { get, set } from 'local-storage'

const checkFirebaseConfig = () => {
  const isConfig = get('firebase')
  if (!isConfig) {
    set < string > ('current-page', 'setting')
    set < string > ('current-anchor', 'database')
    return false
  }

  return true
}

export default checkFirebaseConfig
