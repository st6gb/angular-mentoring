import { Injectable } from '@angular/core';
import { User } from 'src/app/models/common-module';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { switchMap, delay, tap } from 'rxjs/internal/operators';
import { HttpClientService } from '../httpClient/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClientService
  ) { }

  public login(user: User): Observable<string> {
    return this.http.getData(`http://localhost:3004/login?email=${user.email}&password=${user.password}`).pipe(
      delay(300),
      switchMap(([value]) => {
        console.log(value);
        if (value) {
          this.localStorage.setItem('user', value);
          this.localStorage.setItem('token', 'token');
          this.isAuth.next(true);
          return of(this.localStorage.getItem('token'));
        }
        return of('');
      })
    );
  }

  public logout(): Observable<boolean> {
    this.localStorage.removeItem('token');
    return of(this.localStorage.removeItem('user')).pipe(
      tap(() => this.isAuth.next(false)),
      delay(100)
    );
  }

  public setAuthenticated(): Observable<string | null> {
    const token = this.localStorage.getItem('token');
    const serverToken = this.localStorage.getItem('token');
    return of(token === serverToken && token !== null).pipe(
      tap(value => this.isAuth.next(value)),
      switchMap((value) => {
        return value ? of(token) : of(null);
      }),
      delay(100)
    );
  }

  public getUserInfo(token?: string): Observable<User | null> {
    return this.isAuth.pipe(
      switchMap(isAuth => {
        return isAuth ? of(JSON.parse(this.localStorage.getItem('user'))) : of(null);
      })
    );
  }
}
