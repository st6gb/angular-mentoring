import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from 'src/app/components/pages/courses/courses.component';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { CourseDetailsComponent } from 'src/app/components/pages/course-details/course-details.component';
import { PageNotFoundComponent } from 'src/app/components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', children: [
    { path: '', component: CoursesComponent, },
    { path: 'details/:id', component: CourseDetailsComponent },
    { path: 'details', component: CourseDetailsComponent },
  ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
