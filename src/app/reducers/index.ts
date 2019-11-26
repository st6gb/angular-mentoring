import {
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { Course, User } from '../models/common-module';
import { setCourses } from '../actions/courses.actions';
import { environment } from 'src/environments/environment';
import { setToken, setUser, deleteUser, deleteToken } from '../actions/auth.actions';

export interface State {
  courses: Course[];
  token: string | null;
  user: User| null;
}
export const initialState: State = {
  courses: [],
  token: null,
  user: null,
}

const coursesReducer = createReducer(
  initialState,
  on(setCourses, (state, {courses}) => {
    return ({ ...state, courses: [...state.courses, ...courses] });
  }),
);

const userReducer = createReducer(
  initialState,
  on(deleteUser, (state) => {
    return { ...state, user: null }
  }),
  on(setUser, (state, { user }) => {
    return { ...state, user}
  })
);

const tokenReducer = createReducer(
  initialState,
  on(deleteToken, (state) => {
    return { ... state, token: null }
  }),
  on(setToken, (state, { token }) => {
    return { ...state, token }
  }),
);

export function reducerUser(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export function reducerToken(state: State | undefined, action: Action) {
  
}

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
