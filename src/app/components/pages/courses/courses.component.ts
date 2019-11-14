import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/common-module';
import { FilterCoursePipe } from 'src/app/pipes/filterCourse/filter-course.pipe';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { switchMap } from 'rxjs/internal/operators';
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
    private activatedRoute: ActivatedRoute,
    ) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.activatedRoute.queryParams.pipe(
      switchMap(data => {
        if(data.q) {
          this.isLoadMore = false;
          return this.courseService.searchCourses(data.q);
        }
        this.isLoadMore = true;
        return this.courseService.getPageCourseList(this.page, this.limit);
      })
    ).subscribe(data => {
      if (this.isLoadMore) {
        this.page += 1;
        this.isLoadMore = data.length <= this.limit;
      }
      this.courseList = data;
      this.spinnerService.hide();
    })
  }

  public filteredCourses(value = '') {
    if(value) {
      this.router.navigate(['courses'], { queryParams: { q: value } });
    }
  }

  public addNewCourse() {
    this.router.navigate(['courses/new']);
  }

  public loadMore() {
    this.isLoading = true;
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
