import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ValidationErrors, Validator, ControlValueAccessor, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: ['./duration-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationControlComponent),
      multi: true,
    }
  ]
})
export class DurationControlComponent implements OnInit, ControlValueAccessor, Validator {
  @Input('duration') set duration(value) {
    this._duration = value;
    this.writeValue(value);
  }

  get duration() {
    return this._duration;
  }
  public message: string;
  private _duration: string;
  constructor() { }

  ngOnInit() {
  }
  public changeDuration(value: string) {
    this.writeValue(value);
  }

  writeValue(value: string) {
    this.onChange(value);
  }
  onChange: any = () => { };
  onTouched: any = () => { };
  onValidatorChange: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    const value = control.value;
    if (!Number.isInteger(+value) && !control.pristine) {
      this.message = 'should contain only digital';
      return of({});
    }
    this.message = '';
    return null;
  }
}
