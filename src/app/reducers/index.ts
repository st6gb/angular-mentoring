import {
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { Course } from '../models/common-module';
import { setCourses } from '../actions/courses.actions';
import { environment } from 'src/environments/environment';

export interface State {
  courses: Course[];
}
export const initialState: State = {
  courses: [],
}

const coursesReducer = createReducer(
  initialState,
  on(setCourses, (state, {courses}) => {
    console.log(state, courses);
    return ({ ...state, courses: [...state.courses, ...courses] });
  }),
);

export function reducerCourses(state: State | undefined, action: Action) {
  return coursesReducer(state, action);
}

// export const reducers: ActionReducerMap<any> = {
//   courses: coursesReducer
// };
// export function rootReducers(){
//   return compose(combineReducers)({courses: coursesReducer});
// }

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
