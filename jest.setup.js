import { setConfig } from 'next/config';

//This to allow publicRuntimeConfig work with tests.
const publicRuntimeConfig = {
  // Will be available on both server and sdk
  baseAppUrl: process.env.BASE_APP_URL || '',
  nodeEnv: process.env.NODE_ENV,
  apiEnv: process.env.API_ENV,
  cdnUrl: process.env.ASSET_PREFIX || '',
  imageCdnUrl: process.env.ASSET_PREFIX_IMG || ''
};

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig({ publicRuntimeConfig });
