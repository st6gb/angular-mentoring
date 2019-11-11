import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { FilterCoursePipe } from 'src/app/pipes/filterCourse/filter-course.pipe';
import { ModalBoxComponent } from 'src/app/components/modal-box/modal-box.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';



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
  ],
  exports: [
    CommonModule,
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
