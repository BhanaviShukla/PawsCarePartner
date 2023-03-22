import { AuthReduxState, initialAuthState } from '@redux/auth/index';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

type DeleteAppUserType = undefined;

export type DeleteUserActionType = PayloadAction<DeleteAppUserType>;

export const deleteAppUserReducer: CaseReducer<AuthReduxState, DeleteUserActionType> = () => {
  return initialAuthState;
};
