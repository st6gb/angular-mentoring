import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.isAuthenticated().subscribe((data) => console.log(data, 'this is login'));
  }
}
