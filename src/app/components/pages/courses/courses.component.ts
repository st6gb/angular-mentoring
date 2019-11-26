import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/common-module';
import { FilterCoursePipe } from 'src/app/pipes/filterCourse/filter-course.pipe';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { switchMap } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { setCourses, selectCourses, loadCoursesSuccess, loadCourses } from 'src/app/actions/courses.actions';
import { State } from 'src/app/reducers';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [FilterCoursePipe]
})
export class CoursesComponent implements OnInit {
  public courseList: Course[];
  public isLoadMore = false;
  public isLoading = false;
  private page = 1;
  private limit = 2;

  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    private spinnerService: SpinnerService,
    private store: Store<State>
    ) {
      this.store.dispatch(loadCourses())
  }

  ngOnInit() {
    this.spinnerService.show();
    this.courseService.getPageCourseList(this.page, this.limit).subscribe(data => {
      this.page += 1;
      this.courseList = data;
      this.isLoadMore = data.length <= this.limit;
      this.spinnerService.hide();
    })
  }

  public filteredCourses(value = '') {
    this.isLoadMore = false;
    this.spinnerService.show();
    this.courseService.searchCourses(value).subscribe(data => {
      this.courseList = data;
      this.spinnerService.hide();
    })
  }

  public addNewCourse() {
    this.router.navigate(['courses/new']);
  }

  public loadMore() {
    this.isLoading = true;
    this.store.select(selectCourses).subscribe(data => {
    });
    this.courseService.getPageCourseList(this.page, this.limit).subscribe(data => {
      if (data.length) {
        this.courseList = [...this.courseList, ...data];
        this.page += 1;
        this.isLoadMore = data.length === this.limit;
      } else {
        this.isLoadMore = false;
      }
      this.isLoading = false;
    });
  }
}
