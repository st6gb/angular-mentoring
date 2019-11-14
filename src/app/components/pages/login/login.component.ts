import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/common-module';
import { Router } from '@angular/router';

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
    ) { }

  ngOnInit() {
  }

  public onSubmit() {
    const newUser = {
      firstName: '',
      LastName: '',
      password: this.password,
      email: this.email,
    };
    this.isLoading = true;
    this.loginService.login(new User(newUser)).subscribe(data => {
      if (data) {
        this.router.navigate(['/']);
      } else {
        alert('entered wrong email or password');
      }
      console.log(data, 'you log in our service!');
      this.isLoading = false;
    });
  }

}
