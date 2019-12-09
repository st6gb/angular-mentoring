import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { checkAuth, selectToken } from './actions/auth.actions';
import { SubscriptionLike } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isAuth = false;
  constructor(
    public store: Store<AppState>,
    private router: Router
  ) {
    this.store.dispatch(checkAuth());
  }

  ngOnInit() {
    this.store.select(selectToken).subscribe(token => {
      this.isAuth = token !== null;
      if (token) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
