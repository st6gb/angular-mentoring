import { createAction, props } from '@ngrx/store';
import { User } from '../models/common-module';
import { AppState } from '../reducers';

export const setToken = createAction('[Token] set token', props<{token: string}>());
export const deleteToken = createAction('[Token] delete token');
export const checkAuth = createAction('[Token] check auth');
export const logOut = createAction('[Token] log out');

export const setUser = createAction('[User] set user', props<{ user: User }>());
export const loginUser = createAction('[User] login user', props<{user: User}>());
export const deleteUser = createAction('[User] delete user');

export const selectUser = (state: AppState) => state.user.user;
export const selectToken = (state: AppState) => state.user.token;
