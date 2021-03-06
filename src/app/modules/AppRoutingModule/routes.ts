import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
  { path: 'courses', loadChildren: 'src/app/modules/courses/courses.module#CoursesModule'},
  { path: '**', component: PageNotFoundComponent, }
];



@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
