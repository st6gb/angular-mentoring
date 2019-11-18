import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Course } from '../models/common-module';
import { setCourses } from '../actions/courses.actions';

export interface State {
  courses: Course[];
}
export const initialState: State = {
  courses: [],
}

const coursesReducer = createReducer(
  initialState,
  on(setCourses, (state, {courses}) => ({ ...state, courses: [...state.courses, courses] })),
);

export const reducers: ActionReducerMap<State> = {
  
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
