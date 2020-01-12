import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/AppRoutingModule/routes';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { CoreModule } from './modules/core/core.module';
import { ShareModule } from './modules/share/share.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './effects/courses.effects';
import { AuthEffects } from './effects/auth.effects';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  exports: [],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoursesEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ShareModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
