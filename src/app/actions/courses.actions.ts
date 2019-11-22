import { createAction, props, createSelector } from '@ngrx/store';
import { Course } from '../models/common-module';
import { State } from '../reducers';

export const setCourses = createAction('[Courses] set all courses', props<{courses: Course[]}>());
export const deleteCourse = createAction('[Course] delete course', props<{course: Course}>());
export const addCourse = createAction('[Course] add course', props<{course: Course}>());

export const selectCourses = (state: State) => state.courses;