import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/common-module';
import { delay, switchMap, map } from 'rxjs/internal/operators';
import { HttpClientService } from '../httpClient/http-client.service';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  constructor(private http: HttpClientService) { }

  public getCourseList(): Observable<Course[]> {
    return this.http.getData('http://localhost:3004/courses').pipe(
      delay(400),
      map((courses: Course[]) => {
        return courses.map(course => {
          return this.mapDateCourse(course);
        });
      })
    );
  }

  public searchCourses(query: string): Observable<Course[]> {
    return this.http.getData(`http://localhost:3004/courses?q=${query}`).pipe(
      delay(400),
      map((courses: Course[]) => {
        return courses.map(course => {
          return this.mapDateCourse(course);
        });
      })
    );
  }

  public getPageCourseList(page = 1, limit = 1): Observable<Course[] | []> {
    return this.http.getData(`http://localhost:3004/courses?_page=${page}&_limit=${limit}`).pipe(
      delay(400),
      map((courses: Course[]) => {
        return courses.map(course => {
          return this.mapDateCourse(course);
        });
      })
    );
  }

  public getCourseById(id: string): Observable<Course[] | []> {
    return this.http.getData(`http://localhost:3004/courses?id=${id}`).pipe(
      delay(400),
      map((courses: Course[]) => {
        return courses.map(course => {
          return this.mapDateCourse(course);
        });
      })
    );
  }

  public createCourse(course: Course): Observable<Course | {}> {
    const prepareCourse = {
      ...course,
      duration: course.duration.toISOString(),
      creationDate: course.creationDate.toISOString(),
    };
    return this.http.postData('http://localhost:3004/courses', prepareCourse).pipe(
      delay(400),
      map((elem: Course) => {
        return this.mapDateCourse(elem);
      })
    );
  }

  public updateCourse(course: Course): Observable<Course | {}> {
    const prepareCourse = {
      ...course,
      duration: course.duration.toISOString(),
      creationDate: course.creationDate.toISOString(),
    };
    return this.http.putDate('http://localhost:3004/courses/' + course.id, prepareCourse).pipe(delay(400));
  }

  public removeCourse(id: string): Observable<{}> {
    return this.http.deleteData('http://localhost:3004/courses/' + id).pipe(delay(400));
  }

  private mapDateCourse(course): Course {
    course.creationDate = new Date(course.creationDate);
    course.duration = new Date(course.duration);
    return course;
  }
}
