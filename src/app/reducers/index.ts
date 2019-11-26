import { ActionReducerMap } from '@ngrx/store';
import { StateCourse, reducerCourses } from './courses.reducer';
import { StateUser, reducerUser } from './user.reducer';
import { StateToken, reducerToken } from './token.reducer';

export interface State extends StateCourse, StateToken, StateUser {}

export const reducers: ActionReducerMap<any> = {
  allCourses: reducerCourses,
  token: reducerToken,
  user: reducerUser,
}
