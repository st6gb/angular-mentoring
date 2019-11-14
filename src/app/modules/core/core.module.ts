import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from 'src/app/services/login/login.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { AuthGuard } from 'src/app/guards/AuthGuard/auth.guard';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from 'src/app/services/AuthInterceptor/auth-interceptor.service';
import { HttpClientService } from 'src/app/services/httpClient/http-client.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LoginService,
        LocalStorageService,
        HttpClientService,
        AuthGuard,
        SpinnerService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
        }
      ]
    };
  }
}
