import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/common-module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(console.log);
    this.loginService.getUserInfo().subscribe(data => {
      this.user = data;
    })
  }

  public logout() {
    this.loginService.logout().subscribe(data => {
      console.log(data, 'logout!')
      this.router.navigate(['/login']);
    });

  }

}
