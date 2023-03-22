import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { AppCombinedState, combinedReducer } from '@redux/reducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { PreloadedState } from 'redux';
import { useMemo } from 'react';

type PreloadedStateType = PreloadedState<AppCombinedState>;

let store: Store<AppCombinedState>;

function persistedReducer(state: AppCombinedState, action: AnyAction) {
  if (action.type === 'RootState/CLEAR_STATE') {
    state = undefined;
  }
  return combinedReducer(state, action);
}

const createStore = (preloadedState: PreloadedStateType) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });
};

export const initializeStore = (preloadedState: PreloadedStateType) => {
  let _store = store ?? createStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useReduxStore = (initialReduxState: PreloadedStateType) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => createStore(initialReduxState), [initialReduxState]);
};

export type AppDispatch = typeof store.dispatch;
