import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { switchMap, tap } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';
import { Course } from 'src/app/models/common-module';
import { format } from 'date-fns';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { addCourse, updateCourse } from 'src/app/actions/courses.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DateFormatPipe } from 'src/app/pipes/dateFormate/date-format.pipe';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public courseForm: FormGroup;
  public isLoading = false;
  public date: string;
  public duration: string;
  private id: string;
  private isNew = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseServiceService,
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(value => {
        this.isNew = value.id === 'new';
        if (value.id === 'new' || value.id === undefined) {
          return of(null);
        }
        this.id = value.id;
        return this.courseService.getCourseById(value.id);
      }),
      tap((value: Course[] | null) => {
        console.log(value);
        if (value) {
          this.courseForm.patchValue({
            title: value[0].title,
            description: value[0].description,
            date: format(new Date(value[0].creationDate), 'dd.MM.yyyy'),
            duration: value[0].duration,
            authors: value[0].authors
          });
          return of(value);
        }
      })
    ).subscribe(console);
    this.courseForm.valueChanges.subscribe(data => console.log(data));
    this.courseForm.statusChanges.subscribe(data => console.log(data));
  }

  public isFieldInvalid(formName: string): boolean {
    return this.courseForm.get(formName).invalid && !this.courseForm.get(formName).pristine;
  }

  public onSave() {
    this.isLoading = true;
    const newCourse: Course = {
      title: this.courseForm.get('title').value,
      description: this.courseForm.get('description').value,
      duration: this.courseForm.get('duration').value,
      creationDate: new Date(this.courseForm.get('date').value),
      authors: this.courseForm.get('authors').value,
      topRated: false,
    };
    if (this.isNew) {
      this.store.dispatch(addCourse({course: newCourse}));
      this.isLoading = false;
    } else {
      newCourse.id = this.id;
      this.store.dispatch(updateCourse({course: newCourse}));
      this.isLoading = false;
    }
  }

  public onCancel() {
    this.router.navigate(['courses']);
  }

  private createForm() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: [[], []]
    });
  }
}
