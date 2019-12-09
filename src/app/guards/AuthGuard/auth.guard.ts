import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { tap, switchMap } from 'rxjs/internal/operators';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>
    ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectToken).pipe(
      switchMap(isAuth => {
        if (isAuth) {
          return of(true);
        }
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
