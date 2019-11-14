import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/AppRoutingModule/routes';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { CoreModule } from './modules/core/core.module';
import { ShareModule } from './modules/share/share.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ShareModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
