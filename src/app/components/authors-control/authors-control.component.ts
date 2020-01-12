import { Component, OnInit, forwardRef, ViewChild, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, Validator, ControlValueAccessor, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { IAuthor } from 'src/app/models/common-module';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-authors-control',
  templateUrl: './authors-control.component.html',
  styleUrls: ['./authors-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsControlComponent),
      multi: true
    }
  ]
})
export class AuthorsControlComponent implements OnInit, Validator, ControlValueAccessor {
  @ViewChild('inputAuthor', { static: false }) inputAuthor: ElementRef;
  @Input('authors') set authors(value) {
    this.tags = [...value];
    this.writeValue(this.tags);
  }
  public tags: IAuthor[] = [];
  public suggestAuthors: IAuthor[] = [];
  private search$: Subject<string> = new Subject<string>();
  constructor(private courseService: CourseServiceService) { }

  ngOnInit() {
    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((text: string) => {
        if (!text) {
          return of([]);
        }
        return this.courseService.searchAuthors(text).pipe(
          map(data => {
            return data.filter(tag => !this.tags.some(elem => elem.firstName === tag.firstName));
          })
        );
      }),
    ).subscribe(data => {
      this.suggestAuthors = data;
    });
  }

  onChange: any = () => { };
  onTouched: any = () => { };
  onValidatorChange: any = () => { };

  writeValue(value: any): void {
    this.onChange(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public handleOnChange(value: string) {
    this.search$.next(value);
  }

  public removeTag(element: IAuthor) {
    this.tags = this.tags.filter(tag => element.firstName !== tag.firstName);
    this.writeValue(this.tags);
  }

  public getAuthors(query: string) {

  }

  public selectAuthor(author: IAuthor) {
    this.tags.push(author);
    this.writeValue(this.tags);
    this.inputAuthor.nativeElement.value = '';
    this.search$.next('');
  }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    if (control.value.length === 0) {
      return of({ message: 'Required' });
    }
    return null;
  }
}
