import { User } from '../models/common-module';
import { createReducer, on, Action } from '@ngrx/store';
import { deleteUser, setUser } from '../actions/auth.actions';

export interface StateUser {
  user: User | null;
}

export const initialStateUser: StateUser = {
  user: null,
}

const userReducer = createReducer(
  initialStateUser,
  on(deleteUser, (state) => {
    return { ...state, user: null }
  }),
  on(setUser, (state, { user }) => {
    return { ...state, user}
  })
);

export function reducerUser(state: StateUser | undefined, action: Action ) {
  return userReducer(state, action);
}
