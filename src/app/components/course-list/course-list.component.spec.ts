import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item/course-item.component';
import { Course } from 'src/app/models/common-module';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  const courses: Course[] = [
    {
    id: "1",
    title: "title",
    description: "description",
    duration: new Date(),
    creationDate: new Date(),
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseItemComponent ],
      imports: [FormsModule]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CourseListComponent);
      component = fixture.componentInstance;
      component.courseList = courses;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.courseList = courses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be emit course id', () => {
    const buttonDelete: HTMLElement = fixture.debugElement.nativeElement.querySelectorAll('button')[1];
    buttonDelete.click();
    expect(component.courseIdDeleted).toBe('1');
  })
});
