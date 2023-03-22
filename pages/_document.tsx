import { Head, Html, Main, NextScript } from 'next/document';
import { publicRuntimeConfig } from '@util/config';

const { gtmId } = publicRuntimeConfig;

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional' />
      </Head>
      <body>
        <Main />
        <NextScript />
        {gtmId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
        )}
      </body>
    </Html>
  );
}
