import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/common-module';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectUser, deleteUser, logOut } from 'src/app/actions/auth.actions';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: User;
  private subscriber$: SubscriptionLike;
  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(console.log);
    this.subscriber$ = this.store.select(selectUser).subscribe(data => {
      this.user = data;
    });
  }

  ngOnDestroy() {
    if (this.subscriber$) {
      this.subscriber$.unsubscribe();
      this.subscriber$ = null;
    }
  }

  public logout() {
    this.store.dispatch(logOut());
  }

}
