import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { switchMap, tap } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';
import { Course } from 'src/app/models/common-module';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public isLoading = false;
  public title: string = '';
  public description: string = '';
  public date: Date;
  public duration: Date;
  private isNew = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseServiceService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(value => {
        this.isNew = value.id == 'new';
        if(value.id === 'new'|| value.id === undefined) {
          return of(null);
        }
        return this.courseService.getCourseById(value.id);
      }),
      tap((value: Course | null) => {
        if(value){
          this.title = value.title;
          this.description = value.description;
          this.date = value.creationDate;
          this.duration = value.duration;
          return of(value);
        }
      })
    ).subscribe(console)
  }

  public onSave() {
    this.isLoading = true;
    const newCourse: Course = {
      title: this.title,
      duration: this.duration,
      creationDate: this.date,
      description: this.description,
      id: `${Math.floor(Math.random()*1000)}`,
      topRated: false,
    }
    if(this.isNew){
      this.courseService.createCourse(newCourse).subscribe(value =>{
        this.isLoading = false;
        this.router.navigate(['courses']);
      });
    }else {
      this.courseService.updateCourse(newCourse).subscribe(value =>{
        this.isLoading = false;
        this.router.navigate(['courses']);
      });;
    }
    
  }

  public onCancel() {
    this.router.navigate(['courses']);
  }
}
