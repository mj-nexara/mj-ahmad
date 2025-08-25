import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import bn from './locales/bn.json'
import en from './locales/en.json'
import ar from './locales/ar.json'

i18n.use(initReactI18next).init({
  resources: {
    bn: { translation: bn },
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: 'bn',
  fallbackLng: 'bn',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
