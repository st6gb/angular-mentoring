import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { compareAsc, set } from 'date-fns';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective implements OnInit {
  @Input('appCustomBorder') createdDate: Date;

  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    this.setNewBorder(this.element);
  }
  private setNewBorder(element: ElementRef): void {
    const DateNowPlus14days = set(new Date(), { date: 14 });
    if ((compareAsc(new Date(), this.createdDate) && compareAsc(this.createdDate, DateNowPlus14days)) !== -1 ) {
      element.nativeElement.style.border = '2px solid green';
    }
    if (this.createdDate > new Date()) {
      element.nativeElement.style.border = '2px solid blue';
    }
  }
}
