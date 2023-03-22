import getConfig from 'next/config';

//
type PublicRunTimeConfigType = {
  baseAppUrl?: string;
  nodeEnv?: string;
  apiEnv?: string;
  buildNr?: string;
  buildDate?: string;
  buildBranch?: string;
  buildCommit?: string;
  sentryDsn?: string;
  sentryVersion?: string;
  cdnUrl?: string;
  imageCdnUrl?: string;
  gtmId?: string;
  googleOptimizeId?: string;
};

export const publicRuntimeConfig: PublicRunTimeConfigType = getConfig()?.publicRuntimeConfig;
