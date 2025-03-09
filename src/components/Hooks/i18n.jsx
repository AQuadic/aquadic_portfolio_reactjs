import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "../../locales/en/navbar.json";
import navbarAr from "../../locales/ar/navbar.json";
import homeEn from "../../locales/en/home.json";
import homeAr from "../../locales/ar/home.json";
import testimonialsEn from "../../locales/en/testimonials.json";
import testimonialsAr from "../../locales/ar/testimonials.json";

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
        home: homeEn,
        testimonials: testimonialsEn,
      },
      ar: {
        navbar: navbarAr,
        home: homeAr,
        testimonials: testimonialsAr,
      },
    },
  });

export default i18n;
