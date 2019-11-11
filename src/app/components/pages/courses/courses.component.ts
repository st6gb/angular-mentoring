import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/common-module';
import { FilterCoursePipe } from 'src/app/pipes/filterCourse/filter-course.pipe';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [FilterCoursePipe]
})
export class CoursesComponent implements OnInit {
  public courseList: Course[];

  constructor(
    private filterCourses: FilterCoursePipe,
    private courseService: CourseServiceService,
    private router: Router,
    private spinnerService: SpinnerService
    ) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.courseService.getCourseList().subscribe(data => {
      this.courseList = data;
      this.spinnerService.hide();
    });
  }

  public filteredCourses(value = '') {
    this.courseList = this.filterCourses.transform(this.courseList, value);
  }

  public addNewCourse() {
    this.router.navigate(['courses/new']);
  }
}
