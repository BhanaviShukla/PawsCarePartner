import React from 'react';
import { OneColumnLayout } from '@layout/one-column-layout';
import { Seo } from '@components/base/seo';
import { swrGlobalFetcher } from '@hooks/use-api-wrapper';
import { publicRuntimeConfig } from '@util/config';
import { SWRConfig } from 'swr';
import { HttpSsrExampleScreen } from '@screens/http-ssr/http-ssr-example-screen';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSidePropsContext } from 'next';
import { SSRConfig } from 'next-i18next';
import { UserResponse } from '@screens/http-ssr/hooks/use-get-users-ssr';

interface HttpSsrExampleProps extends SSRConfig {
  fallback: { '/api/users': UserResponse[] };
}

export default function Example({ fallback }: HttpSsrExampleProps) {
  return (
    <OneColumnLayout>
      <Seo title='SSR Apis Example' description='HTTP SSR example' />
      <SWRConfig value={{ fallback }}>
        <HttpSsrExampleScreen />
      </SWRConfig>
    </OneColumnLayout>
  );
}

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  // `getStaticProps` is executed on the server side.
  const users = await swrGlobalFetcher<UserResponse>({ url: `${publicRuntimeConfig?.baseAppUrl}/api/users` });

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      fallback: {
        '/api/users': users
      }
    }
  };
}
