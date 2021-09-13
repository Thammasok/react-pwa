import localStorage from 'localStorage'

const xxuLanguage = {
  GetCurrentLanguage: () => {
    const lang = localStorage.getItem('i18nextLng') || 'th'
    return lang
  },
  SetCurrentLanguage: lang => {
    localStorage.setItem('i18nextLng', lang.toLowerCase())
    window.location.reload()
  }
}

export default xxuLanguage
