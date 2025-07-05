import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // JSON 파일 불러오기
  .use(LanguageDetector) // 브라우저 언어 탐지
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // 기본 언어
    debug: true,
    interpolation: {
      escapeValue: false, // react는 자동 XSS 방지
    },
    backend: {
      loadPath: '/locales/{{lng}}.json' 
    }
  });

export default i18n;
