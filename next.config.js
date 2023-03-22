const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  distDir: 'dist',
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    reactRemoveProperties: isProd //Allows remove useless JSX properties ( not DOM)
  },
  // enable source maps on production for getting descriptive errors on logging tools (sentry eg.)
  productionBrowserSourceMaps: true,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000 * 10000000,
    // number of pages that should be kept simultaneously without being disposed (reduce if too much memory taken)
    pagesBufferLength: 10000
  },
  assetPrefix: process.env.ASSET_PREFIX, // You may only need to add assetPrefix in the production.
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    // Will be available on both server and sdk
    //any keys added must be added to the config.ts file too for types.
    baseAppUrl: process.env.BASE_APP_URL || 'http://localhost:3000/',
    nodeEnv: process.env.NODE_ENV,
    apiEnv: process.env.API_ENV,
    buildNr: process.env.BUILD_NR,
    buildDate: process.env.BUILD_DATE,
    buildBranch: process.env.BUILD_BRANCH,
    buildCommit: process.env.BUILD_COMMIT,
    sentryDsn: process.env.SENTRY_DSN,
    sentryVersion: process.env.SENTRY_VERSION,
    cdnUrl: process.env.ASSET_PREFIX || '',
    imageCdnUrl: process.env.ASSET_PREFIX_IMG || '',
    gtmId: process.env.GTM_ID,
    googleOptimizeId: process.env.GOOGLE_OPTIMIZE_ID
  },
  pwa: {
    dest: 'public',
    mode: 'production',
    disable: !isProd, //make this as false if you want to enable / test sw on local
    dynamicStartUrl: false,
    skipWaiting: true,
    clientsClaim: true,
    buildExcludes: [/middleware-manifest\.json$/],
    publicExcludes: ['!assets/img/**/*', '!assets/svg/**/*', '!assets/pwa/**/*'],
    maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache'
        }
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources'
        }
      },
      {
        urlPattern: /.*googleapis\.com.*$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'googleapis-cache'
        }
      },
      {
        urlPattern: /api/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 5 * 60 // 5 minutes
          },
          cacheableResponse: {
            statuses: [0, 200, 404],
            headers: {
              'X-Is-Cacheable': 'true' //https://nextjs.org/docs/api-reference/next.config.js/headers
            }
          }
        }
      }
    ]
  },
  generateBuildId: async () => {
    // https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id
    return process.env.BUILD_COMMIT || 'static';
  },
  webpack: (webpackConfig) => {
    // disable sourcemaps of webpack for prod and live
    if (isProd) {
      webpackConfig.devtool = false;
    }

    return webpackConfig;
  }
};

let nextConfigObj = withPWA(nextConfig);

if (!isProd) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
  });

  nextConfigObj = withBundleAnalyzer(nextConfigObj);
}

module.exports = nextConfigObj;
