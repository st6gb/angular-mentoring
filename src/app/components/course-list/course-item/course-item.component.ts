import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/models/common-module';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() courseDelete: EventEmitter<Course> = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }

  deleteCourse(course: Course): void {
    this.courseDelete.emit(course);
  }
}
