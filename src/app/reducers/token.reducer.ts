import { createReducer, on, Action } from '@ngrx/store';
import { deleteToken, setToken } from '../actions/auth.actions';

export interface StateToken {
  token: string | null;
}

export const initialStateToken: StateToken = {
  token: null
}

const tokenReducer = createReducer(
  initialStateToken,
  on(deleteToken, (state) => {
    return { ... state, token: null }
  }),
  on(setToken, (state, { token }) => {
    return { ...state, token }
  }),
);

export function reducerToken(state: StateToken | undefined, action: Action) {
  return tokenReducer(state, action)
}
