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
import heroEn from "../../locales/en/hero.json";
import heroAr from "../../locales/ar/hero.json";
import processEn from "../../locales/en/process.json";
import processAr from "../../locales/ar/process.json";
import teamEn from "../../locales/en/team.json";
import teamAr from "../../locales/ar/team.json";
import portfolioEn from "../../locales/en/portfolio.json";
import portfolioAr from "../../locales/ar/portfolio.json";
import webDevelopmentEn from "../../locales/en/webDevelopment.json";
import webDevelopmentAr from "../../locales/ar/webDevelopment.json";
import mobDevelopmentEn from "../../locales/en/mobDevelopment.json";
import mobDevelopmentAr from "../../locales/ar/mobDevelopment.json";
import testingEn from "../../locales/en/testing.json";
import testingAr from "../../locales/ar/testing.json";

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
        hero: heroEn,
        process: processEn,
        team: teamEn,
        portfolio: portfolioEn,
        webDevelopment: webDevelopmentEn,
        mobDevelopment: mobDevelopmentEn,
        testing: testingEn,
      },
      ar: {
        navbar: navbarAr,
        aboutus: aboutusAr,
        testimonials: testimonialsAr,
        contactus: contactusAr,
        hero: heroAr,
        process: processAr,
        team: teamAr,
        portfolio: portfolioAr,
        webDevelopment: webDevelopmentAr,
        mobDevelopment: mobDevelopmentAr,
        testing: testingAr,
      },
    },
  });

export default i18n;
