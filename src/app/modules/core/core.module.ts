import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from 'src/app/services/login/login.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { AuthGuard } from 'src/app/guards/AuthGuard/auth.guard';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';



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
        AuthGuard,
        SpinnerService,
      ]
    };
  }
}
