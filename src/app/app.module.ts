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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseListComponent,
    CourseItemComponent,
    CoursesComponent,
    CustomBorderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
