import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/common-module';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  public transform(courses: Course[], value: string, ...args: any[]): any {
    return courses.filter(course => course.title.indexOf(value) >= 0);
  }

}
