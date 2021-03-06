import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { FilterCoursePipe } from 'src/app/pipes/filterCourse/filter-course.pipe';
import { ModalBoxComponent } from 'src/app/components/modal-box/modal-box.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FilterCoursePipe,
    ModalBoxComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FilterCoursePipe,
    ModalBoxComponent,
    SpinnerComponent,
  ]
})
export class ShareModule { }
