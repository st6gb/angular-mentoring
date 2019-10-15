import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { FormsModule } from '@angular/forms';
import { Course } from 'src/app/models/common-module';
import { Component } from '@angular/core';

@Component({
  template: `
  <app-course-item [course]="course" (courseDelete) = 'courseDeleteHandler($event)'></app-course-item>
  `
})
class TestHostComponent {
  public course: Course = {
    id: '1',
    title: 'title',
    description: 'description',
    duration: new Date(),
    creationDate: new Date(),
  };
  deletedCourse: string;

  constructor() { }

  public courseDeleteHandler(deletedCourse: string): void {
    this.deletedCourse = deletedCourse;
  }

}


describe('CourseItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has title', () => {
    const title = fixture.debugElement.nativeElement.querySelector('h1');
    expect(title.textContent).toBe('title');
  });

  it('after click should has deleteCoursesId', () => {
    const button: HTMLElement = fixture.debugElement.nativeElement.querySelectorAll('button')[1];
    expect(button.textContent).toBe('Delete');
    button.click();
    expect(component.deletedCourse).toBe('1');
  });
});
