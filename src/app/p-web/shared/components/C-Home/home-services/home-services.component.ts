import { Component } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss',
})
export class HomeServicesComponent {
  serviceItems = [
    {
      title: 'Cung cấp, lắp đặt đường dây và trạm biến áp đến 220kV',
      thumbnail:'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
      description:
        ' Năng lượng mặt trời khu vực đông nam á là công trình điện năng lượng do công ty DND thực hiện',
    },
    {
      title: 'Cung cấp, lắp đặt hệ thống điện hạ tầng',
      thumbnail:
        'https://lh3.googleusercontent.com/proxy/Em4-crquagqmhopP4hyICygb93PxTUupK4Ym16FYLArkZLMwI6IziRUEUgmDzUXyFeCwLpR_Cgj6TnUhcKKsrSuvKu1EQZ0YgMhfL0x6xLTCViE4klfTY21Z',
      description:
        ' Năng lượng mặt trời khu vực đông nam á là công trình điện năng lượng do công ty DND thực hiện',
    },
    {
      title: 'Cung cấp, lắp đặt hệ thống điện chiếu sáng',
      thumbnail:
        'https://lh3.googleusercontent.com/proxy/_m3te3tbzsvnLVEmpvKvbWku6aV8Mw6tK6EMNyrEJmYqBf9qXfwFV2c3ywovziRZZY7-L5YSgX_HpZrIvj_Vu6BMF9UUmIkxX2Venv8',
      description:
        ' Năng lượng mặt trời khu vực đông nam á là công trình điện năng lượng do công ty DND thực hiện',
    },
  ];
}
