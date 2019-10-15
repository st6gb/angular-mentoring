import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective {
  @Input('appCustomBorder') createdDate;

  constructor(private element: ElementRef) {
    this.setNewBorder(element)
  }

  private setNewBorder(element: ElementRef): void {
    console.log(this.createdDate);
    if(this.createdDate < new Date() && this.createdDate.getDate() >= (new Date().getDate() - 14)) {
      element.nativeElement.style.borderColor = 'green';
    }
  }
}
