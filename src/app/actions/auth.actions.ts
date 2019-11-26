import { createAction, props } from '@ngrx/store';
import { User } from '../models/common-module';
import { State } from '../reducers';

export const setToken = createAction('[Token] set token', props<{token: string}>());
export const deleteToken = createAction('[Token] delete token');

export const setUser = createAction('[User] set user', props<{user: User}>());
export const deleteUser = createAction('[User] delete user');

export const selectUser = (state: State) => state.user;
export const selectToken = (state: State) => state.token;