import { combineReducers } from 'redux';
import auth from '@redux/auth';

export interface AppCombinedState {
  auth: ReturnType<typeof auth>;
}

export const combinedReducer = combineReducers<AppCombinedState>({
  auth
});
