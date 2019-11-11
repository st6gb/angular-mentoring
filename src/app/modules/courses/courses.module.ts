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


@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    CoursesComponent,
    CourseDetailsComponent,
    DateFormatPipe,
    OrderByPipe,
    CustomBorderDirective
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ShareModule,
    CoreModule,
  ],
  providers: [CourseServiceService]
})
export class CoursesModule { }
