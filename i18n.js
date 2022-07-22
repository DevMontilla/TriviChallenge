import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-locize-backend';

const locizeOptions = {
    projectId: '8decd9d6-27c0-48e2-b472-5aaa38193dd0',
    apiKey: '3d435808-a258-4784-8268-712bf6198636',
    refLng:'en',
    version: 'Latest'
}

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: locizeOptions
  });


export default i18n;