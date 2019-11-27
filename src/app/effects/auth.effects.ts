import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { loginUser, setToken } from '../actions/auth.actions';
import { mergeMap, map } from 'rxjs/internal/operators';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class AuthEffects {
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(loginUser),
    mergeMap(({ user }) => {
      console.log(user, 'here');
      return this.loginService.login(user).pipe(
        map(token => setToken({ token }))
      );
    }),
  );
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private loginService: LoginService
  ) { }
}
