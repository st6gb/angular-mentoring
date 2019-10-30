import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/common-module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';

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
    this.loginService.login(new User(newUser)).subscribe(data => {
      console.log(data, 'you log in our service!');
    });
  }

}
