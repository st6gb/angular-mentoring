import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/common-module';
import { delay, switchMap } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private mockCourseList: Course[] = [
    {
      id: '1',
      title: 'Angular',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      creationDate: new Date(2020, 20, 20),
      duration: new Date(),
      topRated: true,
    },
    {
      id: '2',
      title: 'React',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      creationDate: new Date(),
      duration: new Date(),
      topRated: false,
    },
    {
      id: '3',
      title: 'Vue',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      creationDate: new Date(),
      duration: new Date(),
      topRated: false,
    }
  ];

  constructor() { }

  public getCourseList(): Observable<Course[]> {
    return of(this.mockCourseList).pipe(
      delay(500)
    );
  }

  public getCourseById(id: string): Observable<Course | {}> {
    return of(this.mockCourseList).pipe(
      delay(500),
      switchMap((courseList: Course[]) => {
        const courseFound = courseList.find(course => course.id === id);
        return courseFound ? of(courseFound) : of({});
      })
    )
  }

  public createCourse(course: Course): Observable<Course | {}> {
    return of(this.mockCourseList).pipe(
      delay(500),
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
      delay(500),
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
      delay(500),
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
