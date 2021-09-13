import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import localStorage from 'localStorage'
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['th']
const availableLanguages = ['en', 'th']

const initLanguage = localStorage.getItem('i18nextLng')
  ? localStorage.getItem('i18nextLng')
  : 'th'
const options = {
  // order and from where user language should be detected
  order: [
    'querystring',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain'
  ],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage'], // , 'cookie'
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  // cookieMinutes: 10,
  // cookieDomain: 'http://localhost:3000',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
}

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    whitelist: availableLanguages,
    detection: options,
    lng: initLanguage,
    interpolation: {
      escapeValue: false
    },
    debug: false
  })

export default i18n
