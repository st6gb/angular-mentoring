import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/common-module';
import { delay, switchMap, map } from 'rxjs/internal/operators';
import { HttpClientService } from '../httpClient/http-client.service';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private mockCourseList: Course[] = [];

  constructor(private http: HttpClientService) { }

  public getCourseList(): Observable<Course[]> {
    return this.http.getData('http://localhost:3004/courses').pipe(
      map((courses: Course[]) => {
        return courses.map(course => {
          course.creationDate = new Date(course.creationDate);
          course.duration = new Date(course.duration);
          return course;
        });
      })
    );
  }

  public getCourseById(id: string): Observable<Course | {}> {
    return of(this.mockCourseList).pipe(
      delay(100),
      switchMap((courseList: Course[]) => {
        const courseFound = courseList.find(course => course.id === id);
        return courseFound ? of(courseFound) : of({});
      })
    )
  }

  public createCourse(course: Course): Observable<Course | {}> {
    return of(this.mockCourseList).pipe(
      delay(100),
      switchMap((courseList: Course[]) => {
        if (courseList.find((item: Course) => item.id === course.id)) {
          return of({});
        }
        this.mockCourseList = [...this.mockCourseList, course];
        return of(course);
      })
    );
  }

  public updateCourse(course: Course): Observable<Course | {}> {
    return of(this.mockCourseList).pipe(
      delay(100),
      switchMap((courseList: Course[]) => {
        const courseFound = courseList.find((item: Course) => item.id === course.id);
        if (courseFound) {
          this.mockCourseList = this.mockCourseList.map((item: Course) => item.id === course.id ? course : item);
          return of(course);
        }
        return of({});
      })
    );
  }

  public removeCourse(id: string): Observable<Course | {}> {
    return of(this.mockCourseList).pipe(
      delay(100),
      switchMap((courseList: Course[]) => {
        const courseFound = courseList.find((item: Course) => item.id === id);
        if (courseFound) {
          this.mockCourseList = this.mockCourseList.filter(course => course.id !== id);
          return of(courseFound);
        }
        return of({});
      })
    );
  }
}
