import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/common-module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectToken, loginUser } from 'src/app/actions/auth.actions';
import { SubscriptionLike } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public loginForm: FormGroup;
  public isDisabledLoginButton = true;
  private subscription$: SubscriptionLike;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.createForm();
  }

  public get showErrorEmailMessage(): string {
    const errors = this.loginForm.get('email').errors;
    if (errors.email) {
      return 'Email should contain @mail.domain';
    }
    return 'required';
  }

  public isFieldInvalid(formName: string): boolean {
    return this.loginForm.get(formName).invalid && !this.loginForm.get(formName).pristine;
  }

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

    this.loginForm.valueChanges.subscribe(data => {
      console.log(data);
    })

    this.loginForm.statusChanges.subscribe(status => {
      this.isDisabledLoginButton = status === 'INVALID' || status === 'PRISTINE';
    })

  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
      this.subscription$ = null;
    }
  }

  public onSubmit() {
    const { email, password } = this.loginForm.value;
    const newUser = {
      firstName: '',
      LastName: '',
      password: password,
      email: email,
    };
    this.isLoading = true;
    this.store.dispatch(loginUser({user: new User(newUser) }));
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

}
