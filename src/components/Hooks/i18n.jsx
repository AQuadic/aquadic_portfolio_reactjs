import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "../../locales/en/navbar.json";
import navbarAr from "../../locales/ar/navbar.json";
import aboutusEn from "../../locales/en/aboutus.json";
import aboutusAr from "../../locales/ar/aboutus.json";
import testimonialsEn from "../../locales/en/testimonials.json";
import testimonialsAr from "../../locales/ar/testimonials.json";
import contactusEn from "../../locales/en/contactus.json";
import contactusAr from "../../locales/ar/contactus.json";

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
        aboutus: aboutusEn,
        testimonials: testimonialsEn,
        contactus: contactusEn,
      },
      ar: {
        navbar: navbarAr,
        aboutus: aboutusAr,
        testimonials: testimonialsAr,
        contactus: contactusAr,
      },
    },
  });

export default i18n;
