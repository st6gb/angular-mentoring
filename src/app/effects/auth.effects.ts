import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { loginUser, setToken, checkAuth, logOut, deleteToken, deleteUser } from '../actions/auth.actions';
import { mergeMap, map } from 'rxjs/internal/operators';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
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

  @Effect()
  checkAuth$ = this.actions$.pipe(
    ofType(checkAuth),
    mergeMap(() => this.loginService.setAuthenticated().pipe(
      map(token => setToken({ token }))
    ))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(logOut),
    mergeMap(() => this.loginService.logout().pipe(
      map(value => deleteUser())
    ))
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) { }
}
