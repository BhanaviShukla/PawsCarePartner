import { AuthReduxState } from '@redux/auth/index';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type SetAppUserPayloadType = {
  appUser: AuthReduxState['appUser'];
  jwtToken: AuthReduxState['jwtToken'];
};

export type SetAppUserActionType = PayloadAction<SetAppUserPayloadType>;

export const setAppUserReducer: CaseReducer<AuthReduxState, SetAppUserActionType> = (state, action) => {
  const { jwtToken, appUser } = action.payload;

  state.appUser = appUser;
  state.jwtToken = jwtToken;
};
