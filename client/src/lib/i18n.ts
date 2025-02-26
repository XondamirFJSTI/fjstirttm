import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import uzTranslations from '../locales/uz.json';
import ruTranslations from '../locales/ru.json';
import enTranslations from '../locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uzTranslations },
      ru: { translation: ruTranslations },
      en: { translation: enTranslations }
    },
    fallbackLng: 'uz',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
