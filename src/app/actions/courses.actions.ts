import { createAction, props, createSelector } from '@ngrx/store';
import { Course } from '../models/common-module';
import { State } from '../reducers';

export const loadCourses = createAction('[Courses] Load courses');
export const loadCoursesSuccess = createAction('[Courses] Load courses success', props<{courses: Course[], page: number }>());
export const loadCoursesError = createAction('[Courses] Load courses error', props<{courses: [], error: boolean}>());




export const setCourses = createAction('[Courses] set all courses', props<{courses: Course[]}>());
export const deleteCourse = createAction('[Course] delete course', props<{course: Course}>());
export const addCourse = createAction('[Course] add course', props<{course: Course}>());

export const selectCourses = (state: State) => state.courses;
export const selectPageCourse = (state: any) => state.allCourses.page;
export const selectAmountCourse = (state: State) => state.amount;
export const selectCanLoadedCourse = (state: State) => state.canLoaded;