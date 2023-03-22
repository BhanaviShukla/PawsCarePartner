import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { Provider } from 'react-redux';
import { initializeStore, useReduxStore } from '@redux/store';
import { persistStore } from 'redux-persist';
import { AppCombinedState } from '@redux/reducer';
import { PersistGate } from 'redux-persist/integration/react';
import Script from 'next/script';
import { publicRuntimeConfig } from '@util/config';
import { useTrackPageView } from '@hooks/use-track-page-view';
import { DefaultSeo } from 'next-seo';
import { defaultSeo } from '@util/seo-config';
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../next-i18next.config';

const { gtmId } = publicRuntimeConfig;

interface MyAppProps extends AppProps {
  pageProps: {
    initialReduxState: AppCombinedState;
    [key: string]: unknown;
  };
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps, router } = props;
  const { initialReduxState, ...restOfPageProps } = pageProps;

  const store = useReduxStore(initialReduxState);

  const persistedStore = persistStore(store);

  //Tracks page view -> For GA without GTM
  useTrackPageView();

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      {gtmId && (
        <Script
          id='google-tag-manager'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}')`
          }}
        />
      )}
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <div dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className='base-container'>
            <Component {...restOfPageProps} />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  //initialise redux store on server side
  const reduxStore = initializeStore({
    auth: {
      appUser: { a: 1, b: 2 },
      jwtToken: 'asdasd',
      _persist: undefined
    }
  });

  appProps.pageProps = {
    ...appProps.pageProps,
    initialReduxState: reduxStore.getState()
  };

  return appProps;
};

export default appWithTranslation(MyApp, nextI18nConfig);
