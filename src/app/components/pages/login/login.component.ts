import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/common-module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { selectToken, loginUser } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public isLoading = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store<State>
    ) { }

  ngOnInit() {
    this.store.select(selectToken).subscribe(token => {
      if (token) {
        this.router.navigate(['/']);
      }
      console.log(token, 'you log in our service!');
      this.isLoading = false;
    });
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
