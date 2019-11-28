import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CourseServiceService } from '../services/courseService/course-service.service';
import {
  loadCoursesSuccess,
  loadCoursesError,
  loadCourses,
  selectPageCourse,
  loadCoursesMore,
  selectCourses,
  addCourse
} from '../actions/courses.actions';
import { mergeMap, map, catchError, switchMap, tap, take } from 'rxjs/internal/operators';
import { of, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class CoursesEffects {
  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType(loadCourses),
    mergeMap(() => this.store.select(selectPageCourse).pipe(
      take(1),
      switchMap(page => forkJoin([this.CourseService.getPageCourseList(page), of(page)])),
      map(([courses, page]) => loadCoursesSuccess({ courses, page, canLoaded: true })),
      catchError(() => of(loadCoursesError({ courses: [], error: true })))
    ))
  );

  @Effect()
  loadCourseMore$ = this.actions$.pipe(
    ofType(loadCoursesMore),
    mergeMap(() => this.store.select(selectCourses).pipe(
      take(1),
      switchMap(data => forkJoin([this.CourseService.getPageCourseList(data.page + 1), of(data)])),
      map(([courses, data]) => {
        const canLoadMore = courses.length > 0;
        return loadCoursesSuccess({ courses, page: data.page + 1, canLoaded: canLoadMore });
      })
    ))
  );

  @Effect()
  addNewCourse$ = this.actions$.pipe(
    ofType(addCourse),
    mergeMap(({ course }) => this.CourseService.createCourse(course).pipe(
    ))
  );

  constructor(
  private actions$: Actions,
  private CourseService: CourseServiceService,
  private store: Store<AppState>,
  ) {

  }
}
