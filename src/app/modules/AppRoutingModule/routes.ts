import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { PageNotFoundComponent } from 'src/app/components/pages/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/guards/AuthGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', loadChildren: 'src/app/modules/courses/courses.module#CoursesModule'},
  { path: '**', component: PageNotFoundComponent, }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
