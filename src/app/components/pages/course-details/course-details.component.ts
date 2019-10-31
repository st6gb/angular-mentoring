import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public title: string = '';
  public description: string = '';
  public date: string = '';
  public duration: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public onSave() {
    console.log('save it!!');
  }

  public onCancel() {
    this.router.navigate(['courses']);
  }
}
