import { createAction, props, createSelector } from '@ngrx/store';
import { Course } from '../models/common-module';
import { AppState } from '../reducers';

export const loadCourses = createAction('[Courses] Load courses');
export const loadCoursesMore = createAction('[Courses] Load courses more');
export const loadCoursesSuccess = createAction(
  '[Courses] Load courses success', props<{ courses: Course[], page: number, canLoaded: boolean }>()
);
export const loadCoursesError = createAction('[Courses] Load courses error', props<{courses: [], error: boolean}>());




export const setCourses = createAction('[Courses] set all courses', props<{courses: Course[]}>());
export const deleteCourse = createAction('[Course] delete course', props<{course: Course}>());
export const addCourse = createAction('[Course] add course', props<{course: Course}>());

export const selectCourses = (state: AppState) => state.allCourses;
export const selectPageCourse = (state: AppState) => state.allCourses.page;
export const selectAmountCourse = (state: AppState) => state.allCourses.amount;
export const selectCanLoadedCourse = (state: AppState) => state.allCourses.canLoaded;
