import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: any, property: string = 'text') {
    let result: any;
    if (status === 1) {
      result = { text: 'Đang soạn thảo', color: 'black' };
    } else if (status === 2) {
      result = { text: 'Gửi duyệt', color: 'blue' };
    }
    if (status === 3) {
      result = { text: 'Duyệt áp dụng', color: 'green' };
    }
    if (status === 4) {
      result = { text: 'Ngưng áp dụng', color: 'red' };
    }
    if (status === 5) {
      result = { text: 'Trả về', color: 'rgb(209, 209, 13)' };
    }

    return result[property];
  }
}
