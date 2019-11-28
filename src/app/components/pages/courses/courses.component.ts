import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/models/common-module';
import { FilterCoursePipe } from 'src/app/pipes/filterCourse/filter-course.pipe';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { Store } from '@ngrx/store';
import { selectCourses, loadCourses, loadCoursesMore } from 'src/app/actions/courses.actions';
import { AppState } from 'src/app/reducers';
import { SubscriptionLike } from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [FilterCoursePipe]
})
export class CoursesComponent implements OnInit, OnDestroy {
  public courseList: Course[];
  public isLoadMore = false;
  public isLoading = false;
  private subscription: SubscriptionLike;

  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    private spinnerService: SpinnerService,
    private store: Store<AppState>
    ) {
    this.store.dispatch(loadCourses());
  }

  ngOnInit() {
    this.spinnerService.show();
    this.subscription = this.store.select(selectCourses).subscribe(({courses, canLoaded}) => {
      console.log('lala', courses);
      this.courseList = courses;
      this.spinnerService.hide();
      this.isLoading = false;
      this.isLoadMore = canLoaded;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  public filteredCourses(value = '') {
    this.isLoadMore = false;
    this.spinnerService.show();
    this.courseService.searchCourses(value).subscribe(data => {
      this.courseList = data;
      this.spinnerService.hide();
    });
  }

  public addNewCourse() {
    this.router.navigate(['courses/new']);
  }

  public loadMore() {
    this.isLoading = true;
    this.store.dispatch(loadCoursesMore());
  }
}
