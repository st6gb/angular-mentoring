import { Injectable } from '@angular/core';
import { User } from 'src/app/models/common-module';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { switchMap, delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  public login(user: User): Observable<string> {
    return of(user).pipe(
      delay(100),
      switchMap(value => {
        this.localStorage.setItem('user', value);
        this.localStorage.setItem('token', 'token');
        return of(this.localStorage.getItem('token'));
      })
    );
  }

  public logout(): Observable<boolean> {
    this.localStorage.removeItem('token');
    return of(this.localStorage.removeItem('user')).pipe(
      delay(100)
    );
  }

  public isAuthenticated(): Observable<boolean> {
    const token = this.localStorage.getItem('token');
    const serverToken = this.localStorage.getItem('token');
    return of(token === serverToken && token !== null).pipe(
      delay(100)
    );
  }

  public getUserInfo(token?: string): Observable<User | null> {
    return this.isAuthenticated().pipe(
      switchMap(isAuth => {
        return isAuth ? of(JSON.parse(this.localStorage.getItem('user'))) : of(null);
      })
    );
  }
}
