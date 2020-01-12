import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/common-module';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectUser, deleteUser, logOut } from 'src/app/actions/auth.actions';
import { SubscriptionLike } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

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
    public translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    }

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
