import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from 'src/app/components/pages/courses/courses.component';
import { LoginComponent } from 'src/app/components/pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
