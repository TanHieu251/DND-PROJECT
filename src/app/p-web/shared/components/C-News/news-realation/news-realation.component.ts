import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-realation',
  templateUrl: './news-realation.component.html',
  styleUrl: './news-realation.component.scss'
})
export class NewsRealationComponent {
  constructor(private router: Router) {}
  dataNewsRelation =[
    {
      imageRelation: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png',
      titleRelation: 'Nhà máy nhiệt điện Nhơn Trạch 3, 4 nhận điện ngược thành công'
    },
    {
      imageRelation: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png',
      titleRelation: 'An toàn điện'
    },
    {
      imageRelation: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png',
      titleRelation: 'Ứng dụng của điện'
    },
    {
      imageRelation: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png',
      titleRelation: 'Thiết bị và linh kiện điện'
    },
  ]
  goTonewDetail(dataNew: string) {
    this.router.navigate(['/newDetail', dataNew])
    window.scrollTo({top: 0, behavior:'smooth'});
  }
}
