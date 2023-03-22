import { NextSeo } from 'next-seo';
import React from 'react';
import { NextSeoProps } from 'next-seo/lib/types';

export function Seo(props: NextSeoProps) {
  const { canonical, ...restSeoConfig } = props;

  // //todo: fix this after localization

  return <NextSeo canonical={canonical} {...restSeoConfig} />;
}
