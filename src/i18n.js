// NPM packages
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Project files
import english from "./translations/english.json";
import swedish from "./translations/swedish.json";

// Configure i18n for internationalization
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    se: { translation: swedish },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }, // react already saves from xss
});

export default i18n;
