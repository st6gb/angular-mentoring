import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/common-module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _email: string;
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  private _password: string;
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public onSubmit() {
    const newUser = {
      id: '',
      firstName: '',
      LastName: '',
      password: this.password,
      email: this.email,
    };
    this.loginService.login(new User(newUser));
  }

}
