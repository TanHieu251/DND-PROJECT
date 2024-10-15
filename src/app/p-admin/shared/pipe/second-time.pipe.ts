import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'second',
})
export class AddSPipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'number') {
      return `${value}s`;
    } else {
      return value;
    }
  }
}
