import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ShareModule } from '../share/share.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    ShareModule,
    CoreModule,
  ]
})
export class LoginModule { }
