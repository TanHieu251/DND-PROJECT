import { Component } from '@angular/core';
import { serviceData } from '../../../../../data/product';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss',
})
export class HomeServicesComponent {
  // serviceItems= serviceData;
  serviceItems = [
    {
      title: 'Dịch vụ lắp đặt điện',
      description: 'Cung cấp và lắp đặt các thiết bị điện cho nhà ở và công nghiệp.',
      image:'assets/suachapdien-1536x1024.png',
      thumbnail:'assets/suachapdien-1536x1024.png',
      features: [
        'Thiết bị chất lượng cao',
        'Đội ngũ kỹ thuật chuyên nghiệp',
        'Đáp ứng nhanh chóng yêu cầu của khách hàng'
      ],
      process: [
        'Tiếp nhận yêu cầu của khách hàng',
        'Khảo sát thực tế và lên phương án',
        'Thực hiện lắp đặt',
        'Bàn giao và hướng dẫn sử dụng'
      ]
    },
    {
      title: 'Dịch vụ bảo trì hệ thống',
      description: 'Bảo trì định kỳ và sửa chữa các thiết bị trong hệ thống điện.',
      image:'/assets/baotrihethong.jpg',
      thumbnail:'assets/suachapdien-1536x1024.png',
      features: [
        'Hỗ trợ 24/7',
        'Kiểm tra định kỳ miễn phí',
        'Sửa chữa nhanh chóng'
      ],
      process: [
        'Tiếp nhận thông tin yêu cầu bảo trì',
        'Kiểm tra và chẩn đoán tình trạng',
        'Thực hiện sửa chữa hoặc thay thế',
        'Kiểm tra lại và bàn giao hệ thống'
      ]
    },
    {
      title: 'Dịch vụ kiểm tra an toàn điện',
      description: 'Kiểm tra an toàn điện định kỳ cho các công trình dân dụng và công nghiệp.',
      image: '/assets/kiemtraantoandien.jpg',
      thumbnail:'assets/suachapdien-1536x1024.png',
      features: [
        'Đánh giá toàn diện tình trạng hệ thống điện',
        'Tư vấn cải thiện và nâng cấp hệ thống',
        'Đội ngũ chuyên gia nhiều kinh nghiệm'
      ],
      process: [
        'Tiếp nhận yêu cầu kiểm tra từ khách hàng',
        'Tiến hành kiểm tra thực tế hệ thống',
        'Báo cáo kết quả kiểm tra và đề xuất giải pháp',
        'Thực hiện các biện pháp khắc phục (nếu cần)'
      ]
    },
    // {
    //   title: 'Cung cấp, lắp đặt đường dây và trạm biến áp đến 220kV',
    //   thumbnail:'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
    //   description:
    //     ' Năng lượng mặt trời khu vực đông nam á là công trình điện năng lượng do công ty DND thực hiện',
    // },
    // {
    //   title: 'Cung cấp, lắp đặt hệ thống điện hạ tầng',
    //   thumbnail:
    //     'https://lh3.googleusercontent.com/proxy/Em4-crquagqmhopP4hyICygb93PxTUupK4Ym16FYLArkZLMwI6IziRUEUgmDzUXyFeCwLpR_Cgj6TnUhcKKsrSuvKu1EQZ0YgMhfL0x6xLTCViE4klfTY21Z',
    //   description:
    //     ' Năng lượng mặt trời khu vực đông nam á là công trình điện năng lượng do công ty DND thực hiện',
    // },
    // {
    //   title: 'Cung cấp, lắp đặt hệ thống điện chiếu sáng',
    //   thumbnail:
    //     'https://lh3.googleusercontent.com/proxy/_m3te3tbzsvnLVEmpvKvbWku6aV8Mw6tK6EMNyrEJmYqBf9qXfwFV2c3ywovziRZZY7-L5YSgX_HpZrIvj_Vu6BMF9UUmIkxX2Venv8',
    //   description:
    //     ' Năng lượng mặt trời khu vực đông nam á là công trình điện năng lượng do công ty DND thực hiện',
    // },
  ];
}
