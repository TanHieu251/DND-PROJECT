import { Component } from '@angular/core';

@Component({
  selector: 'app-p001-product-category',
  templateUrl: './p001-product-category.component.html',
  styleUrl: './p001-product-category.component.scss',
})
export class P001ProductCategoryComponent {
  data = [
    {
      title: 'Câu hỏi 1',
      code: 'Q1',
      typeQuestion: 'Trắc nghiệm',
      group: 'Nhóm A',
      time: 120,
      status: 'completed',
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      status: 'pending',
    },
  ];

  displayedColumns: string[] = ['select', 'title', 'code', 'typeQuestion', 'group', 'popup'];

}
