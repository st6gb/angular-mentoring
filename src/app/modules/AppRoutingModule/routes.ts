import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from 'src/app/components/pages/courses/courses.component';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { CourseDetailsComponent } from 'src/app/components/pages/course-details/course-details.component';
import { PageNotFoundComponent } from 'src/app/components/pages/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/guards/AuthGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', canActivate: [AuthGuard], data: { breadcrumb: 'Courses' }, children: [
    { path: '', component: CoursesComponent, },
    { path: 'details/:id', component: CourseDetailsComponent, data: { breadcrumb: '' } },
    { path: 'details/new', component: CourseDetailsComponent, data: { breadcrumb: 'new' } },
  ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
