import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from 'src/app/components/course-list/course-list.component';
import { CourseItemComponent } from 'src/app/components/course-list/course-item/course-item.component';
import { CoursesComponent } from 'src/app/components/pages/courses/courses.component';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { CourseDetailsComponent } from 'src/app/components/pages/course-details/course-details.component';
import { CustomBorderDirective } from 'src/app/directives/custom-border.directive';
import { DateFormatPipe } from 'src/app/pipes/dateFormate/date-format.pipe';
import { OrderByPipe } from 'src/app/pipes/orderBy/order-by.pipe';
import { ShareModule } from '../share/share.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { DateControlComponent } from 'src/app/components/date-control/date-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DurationControlComponent } from 'src/app/components/duration-control/duration-control.component';
import { AuthorsControlComponent } from 'src/app/components/authors-control/authors-control.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    CoursesComponent,
    CourseDetailsComponent,
    DateControlComponent,
    DurationControlComponent,
    AuthorsControlComponent,
    DateFormatPipe,
    OrderByPipe,
    CustomBorderDirective
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    ShareModule,
    CoreModule,
    RouterModule
  ],
  providers: [CourseServiceService]
})
export class CoursesModule { }
