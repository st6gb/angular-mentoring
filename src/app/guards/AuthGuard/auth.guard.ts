import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
    ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.isAuth.pipe(
      tap(isAuth => {
        console.log(isAuth, '==============');
        if(isAuth) {
          return true;
        }
        this.router.navigate(['/login']);
        return false
      })
    )
  }
  
}
