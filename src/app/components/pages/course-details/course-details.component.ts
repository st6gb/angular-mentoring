import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public onSave() {
    console.log('save it!!');
  }

  public onCancel() {
    console.log('cancel it!!!');
  }
}
