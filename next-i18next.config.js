const HttpBackend = require('i18next-http-backend/cjs');
const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  backend: {
    backendOptions: [{ expirationTime: !isProd ? 0 : 30 * 60 * 1000 }, {}], // Translation cached for 30 min on production
    backends: typeof window !== 'undefined' ? [LocalStorageBackend, HttpBackend] : []
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar']
  },
  serializeConfig: false,
  use: typeof window !== 'undefined' ? [ChainedBackend] : [],
  reloadOnPrerender: !isProd
};
