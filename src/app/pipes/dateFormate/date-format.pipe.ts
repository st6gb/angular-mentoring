import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let hours = (value - (value % 60)) / 60;
    let minutes = value % 60;
    return `${hours} h ${minutes} min`;
  }

}
