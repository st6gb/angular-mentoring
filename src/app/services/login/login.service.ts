import { Injectable } from '@angular/core';
import { User } from 'src/app/models/common-module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(user: User): Observable<User>
}
