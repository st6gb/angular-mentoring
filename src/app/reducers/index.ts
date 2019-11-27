import { ActionReducerMap } from '@ngrx/store';
import { StateCourse, reducerCourses } from './courses.reducer';
import { StateUser, reducerUser } from './user.reducer';

export interface State {
  allCourses: StateCourse;
  user: StateUser;
}

export const reducers: ActionReducerMap<any> = {
  allCourses: reducerCourses,
  user: reducerUser,
};
