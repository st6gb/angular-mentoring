import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ShareModule } from '../share/share.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from 'src/app/components/pages/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule,
    CoreModule
  ]
})
export class LoginModule { }
