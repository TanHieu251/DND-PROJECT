import { Component } from '@angular/core';

@Component({
  selector: 'app-news-realation',
  templateUrl: './news-realation.component.html',
  styleUrl: './news-realation.component.scss'
})
export class NewsRealationComponent {
  dataNews =[
    {
      imageRelation: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png',
      titleRelation: 'Năng lượng tái tạo và điện'
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
}
