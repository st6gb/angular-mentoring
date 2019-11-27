import { Course } from '../models/common-module';
import { createReducer, on, Action } from '@ngrx/store';
import { setCourses, loadCoursesSuccess } from '../actions/courses.actions';

export interface StateCourse {
  courses: Course[];
  canLoaded: boolean;
  page: number;
  amount: number;
}

export const initialStateCourse: StateCourse = {
  courses: [],
  canLoaded: true,
  page: 1,
  amount: 2
};

const coursesReducer = createReducer(
  initialStateCourse,
  on(loadCoursesSuccess, (state, { courses, page, canLoaded }) => {
    return { ...state, courses: [...state.courses, ...courses], page, canLoaded };
  }),
  on(setCourses, (state, {courses}) => {
    return ({ ...state, courses: [ ...courses] });
  }),
);

export function reducerCourses(state: StateCourse | undefined, action: Action) {
  return coursesReducer(state, action);
}
