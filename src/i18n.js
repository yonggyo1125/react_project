import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko';
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language,
});
