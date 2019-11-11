import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/search/search.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-list/course-item/course-item.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { AppRoutingModule } from './modules/AppRoutingModule/routes';
import { CustomBorderDirective } from './directives/custom-border.directive';
import { DateFormatPipe } from './pipes/dateFormate/date-format.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterCoursePipe } from './pipes/filterCourse/filter-course.pipe';
import { CourseServiceService } from './services/courseService/course-service.service';
import { LoginService } from './services/login/login.service';
import { LocalStorageService } from './services/localStorage/local-storage.service';
import { LoginComponent } from './components/pages/login/login.component';
import { CourseDetailsComponent } from './components/pages/course-details/course-details.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ModalBoxComponent } from './components/modal-box/modal-box.component';
import { AuthGuard } from './guards/AuthGuard/auth.guard';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner/spinner.service';
import { CoursesModule } from './modules/courses/courses.module';
import { LoginModule } from './modules/login/login.module';
import { CoreModule } from './modules/core/core.module';
import { ShareModule } from './modules/share/share.module';

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
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
