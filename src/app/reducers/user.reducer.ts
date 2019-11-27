import { User } from '../models/common-module';
import { createReducer, on, Action } from '@ngrx/store';
import { deleteUser, setUser, setToken } from '../actions/auth.actions';

export interface StateUser {
  user: User | null;
  token: string | null;
}

export const initialStateUser: StateUser = {
  user: null,
  token: null,
};

const userReducer = createReducer(
  initialStateUser,
  on(deleteUser, (state) => {
    return { ...state, user: null, token: null };
  }),
  on(setUser, (state, { user }) => {
    return { ...state, user };
  }),
  on(setToken, (state, { token }) => {
    return { ...state, token };
  })
);

export function reducerUser(state: StateUser | undefined, action: Action ) {
  return userReducer(state, action);
}
