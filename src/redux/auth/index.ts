import { setAppUserReducer } from '@redux/auth/set-app-user';
import { deleteAppUserReducer } from '@redux/auth/delete-app-user';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';

export interface AuthReduxState {
  appUser: unknown;
  jwtToken: string;
}

export const initialAuthState: AuthReduxState = {
  appUser: {} as AuthReduxState['appUser'],
  jwtToken: ''
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setAppUserAction: setAppUserReducer,
    deleteAppUserAction: deleteAppUserReducer
  }
});

export const { setAppUserAction, deleteAppUserAction } = AuthSlice.actions;

const authPersistConfig: PersistConfig<AuthReduxState> = {
  // timeout: 1000, add if it affects the load time
  key: 'auth',
  storage: storage,
  whitelist: ['jwtToken', 'appUser']
};

export default persistReducer(authPersistConfig, AuthSlice.reducer);
