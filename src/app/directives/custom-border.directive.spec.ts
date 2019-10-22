import { CustomBorderDirective } from './custom-border.directive';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Course } from '../models/common-module';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  selector: 'app-test-component',
  template: `<h1 [appCustomBorder]="course.creationDate">this is test components</h1>`
})
class TestComponent {
  public course: Course = {
    id: '1',
    title: 'title',
    description: 'description',
    duration: new Date(),
    creationDate: new Date(),
    topRated: true,
  };
}

describe('CustomBorderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomBorderDirective,
        TestComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should change border', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(el.style.border).toBe('');
    fixture.detectChanges();
    expect(el.style.border).toBe('2px solid green');
  });
});
