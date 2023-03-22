import { render, RenderOptions } from '@testing-library/react';
import { initializeStore } from '@redux/store';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { ReactElement } from 'react';

i18n?.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  // have a common namespace used around the full app
  ns: ['common, home-page'],
  defaultNS: 'common',
  debug: true,
  resources: { en: { common: {}, 'home-page': {} }, ar: { common: {}, 'home-page': {} } }
});

export const ApplicationProvider = ({ children }: { children: ReactElement }) => {
  const reduxStore = initializeStore({
    auth: {
      appUser: { a: 1, b: 2 },
      jwtToken: 'asdasd',
      _persist: undefined
    }
  });
  const mockRouter: NextRouter = {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: false,
    isPreview: false
  };
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={reduxStore}>
        <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>
      </Provider>
    </I18nextProvider>
  );
};

export const appRenderer = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ApplicationProvider, ...options });
