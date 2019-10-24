import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { Course } from 'src/app/models/common-module';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  template: `
  <app-course-list [courseList]="courseList"></app-course-list>
  `
})
class TestHostComponent {
  public courseList: Course[] = [{
    id: '1',
    title: 'title',
    description: 'description',
    duration: new Date(),
    creationDate: new Date(),
    topRated: false,
  }];

  constructor() { }

}

@Pipe({ name: 'orderBy' })
class OrderByStub implements PipeTransform {
  transform(value) {
    return value;
  }
}


describe('CourseListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, TestHostComponent, OrderByStub ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    })
    .compileComponents().then();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
