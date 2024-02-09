// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import trTranslation from '../locales/tr.json';
import ptTranslation from '../locales/pt.json';
import itTranslation from '../locales/it.json';

const resources = {
    en: { translation: enTranslation },
    tr: { translation: trTranslation },
    pt: { translation: ptTranslation },
    it: { translation: itTranslation }
};

// Dil bilgisini localStorage'dan al
const storedLanguage = localStorage.getItem('language');

// Varsayılan dil, localStorage'da kayıtlı değilse 'en' olarak ayarla
const defaultLanguage = storedLanguage || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

// Dil bilgisini localStorage'a kaydet
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;
