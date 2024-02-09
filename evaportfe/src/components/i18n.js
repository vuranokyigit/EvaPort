// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import ptTranslation from '../locales/pt.json';
import itTranslation from '../locales/it.json';

const resources = {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation },
    it: { translation: itTranslation }
};

// Dil bilgisini localStorage'dan al
const storedLanguage = localStorage.getItem('language');

// Varsayılan dil, localStorage'da kayıtlı değilse 'en' olarak ayarla
const defaultLanguage = storedLanguage || 'pt';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        }
    });

// Dil bilgisini localStorage'a kaydet
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;
