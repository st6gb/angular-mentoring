import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/common-module';
import { compareAsc } from 'date-fns';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[] = [], ...args: any[]): Course[] {
    return courses.sort((a, b) => {
      return compareAsc(a.creationDate, b.creationDate);
    });
  }

}
