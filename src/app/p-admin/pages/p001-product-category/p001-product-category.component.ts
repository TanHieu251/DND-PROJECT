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
      Status: 2,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 0,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 0,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 0,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 3,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 2,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 1,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 2,
    },
    {
      title: 'Câu hỏi 2',
      code: 'Q2',
      typeQuestion: 'Tự luận',
      group: 'Nhóm B',
      time: 180,
      Status: 3,
    },
  ];
  //common
  isDrawerOpen: boolean = false;

  onClickAction(e: any) {
    this.toggleDrawer();
  }


  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  displayedColumns: string[] = [
    'title',
    'code',
    'typeQuestion',
    'group',
    'Status',
    'popup',
  ];
}
