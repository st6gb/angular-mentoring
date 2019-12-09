import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/common-module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectToken, loginUser } from 'src/app/actions/auth.actions';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public email: string = '';
  public password: string = '';
  public isLoading = false;
  private subscription$: SubscriptionLike;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    ) { }

  ngOnInit() {
    this.subscription$ = this.store.select(selectToken).subscribe(token => {
      if (token) {
        // this.router.navigate(['/courses']);
      } else {
        this.router.navigate(['/login']);
      }
      console.log(token, 'you log in our service!');
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
      this.subscription$ = null;
    }
  }

  public onSubmit() {
    const newUser = {
      firstName: '',
      LastName: '',
      password: this.password,
      email: this.email,
    };
    this.isLoading = true;
    this.store.dispatch(loginUser({user: new User(newUser) }));
  }

}
