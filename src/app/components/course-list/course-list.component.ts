import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/common-module';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courseList: Course[];

  public courseIdDeleted: string;
  constructor() { }

  ngOnInit() {
  }

  public courseDeleteHandler(courseIdDeleted) {
    console.log(courseIdDeleted);
    this.courseIdDeleted = courseIdDeleted;
  }
}
