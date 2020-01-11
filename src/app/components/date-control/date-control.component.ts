import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateControlComponent),
      multi: true,
    }
  ]
})
export class DateControlComponent implements OnInit, ControlValueAccessor, Validator {
  @Input('date') set date(value) {
    this._date = value;
    this.writeValue(value);
  }

  get date() {
    return this._date;
  }
  public errorMessage: string;
  private disabled = false;
  private _date: string;
  constructor() { }

  ngOnInit() {
    this.writeValue(this.date);
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
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    const value = control.value;
    if (value.length !== 10 && !control.pristine) {
      this.errorMessage = 'should contain dd.MM.yyyy';
      return of({ message: this.errorMessage });
    }
    if (value.match(/\d{2}.\d{2}.\d{4}/) === null && !control.pristine) {
      this.errorMessage = 'should contain dd.MM.yyyy';
      return of({ message: this.errorMessage });
    }
    this.errorMessage = '';
    return null;
  }
}
