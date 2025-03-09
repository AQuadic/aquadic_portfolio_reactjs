import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "../../locales/en/navbar.json";
import navbarAr from "../../locales/ar/navbar.json";

i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    ns: ["navbar"],
    defaultNS: "navbar",
    resources: {
      en: {
        navbar: navbarEn,
      },
      ar: {
        navbar: navbarAr,
      },
    },
  });

export default i18n;
