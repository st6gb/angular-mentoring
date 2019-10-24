import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/common-module';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courseList: Course[];

  constructor(
    private courseService: CourseServiceService
    ) { }

  ngOnInit() {
  }

  public courseDeleteHandler(courseDeleted: Course) {
    if(confirm(`Are you sure to delete ${courseDeleted.title}`)) {
      this.courseService.removeCourse(courseDeleted.id).subscribe(data => {
        if(data instanceof Course) { // don't work need union type!!!
          alert('Deleted success');
          this.courseList = this.courseList.filter(course => course.id !== data.id);
          return;
        }
        alert('Something went wrong');
        return;
      })
    }
  }
}
