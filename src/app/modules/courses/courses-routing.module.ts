import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/AuthGuard/auth.guard';
import { CoursesComponent } from 'src/app/components/pages/courses/courses.component';
import { CourseDetailsComponent } from 'src/app/components/pages/course-details/course-details.component';


const routerCourses: Routes = [
  {
    path: '', canActivate: [AuthGuard],
    data: { breadcrumb: 'Courses' },
    children: [
      { path: '', component: CoursesComponent, data: { breadcrumb: null } },
      { path: ':id', component: CourseDetailsComponent, data: { breadcrumb: '' } },
      { path: 'new', component: CourseDetailsComponent, data: { breadcrumb: 'new' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routerCourses)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
