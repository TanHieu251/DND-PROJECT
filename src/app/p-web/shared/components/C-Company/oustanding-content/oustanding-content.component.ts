import { Component } from '@angular/core';

@Component({
  selector: 'app-oustanding-content',
  templateUrl: './oustanding-content.component.html',
  styleUrl: './oustanding-content.component.scss'
})
export class OustandingContentComponent {
  currentSlide = 0;
  slides = [
    {
      image: 'assets/slide1.jpg',
      title: 'Sản phẩm và dịch vụ 1',
      description: 'Công ty DND chuyên cung cấp các sản phẩm và giải pháp...',
      details: [
        'Thiết kế và lắp đặt hệ thống điện công nghiệp cho nhà máy, xưởng sản xuất.',
        'Tư vấn và triển khai hệ thống tự động hóa trong quy trình sản xuất công nghiệp.',
        'Cung cấp các thiết bị, linh kiện điện công nghiệp đạt tiêu chuẩn quốc tế.',
        'Bảo trì, sửa chữa và nâng cấp hệ thống điện và tự động hóa.'
      ]
    },
    {
      image: 'assets/slide1.jpg',
      title: 'Sản phẩm và dịch vụ 2',
      description: 'Công ty DND chuyên cung cấp các sản phẩm và giải pháp...',
      details: [
        'Thiết kế và lắp đặt hệ thống điện công nghiệp cho nhà máy, xưởng sản xuất.',
        'Tư vấn và triển khai hệ thống tự động hóa trong quy trình sản xuất công nghiệp.',
        'Cung cấp các thiết bị, linh kiện điện công nghiệp đạt tiêu chuẩn quốc tế.',
        'Bảo trì, sửa chữa và nâng cấp hệ thống điện và tự động hóa.'
      ]
    },
    {
      image: 'assets/slide1.jpg',
      title: 'Sản phẩm và dịch vụ',
      description: 'Công ty DND chuyên cung cấp các sản phẩm và giải pháp...',
      details: [
        'Thiết kế và lắp đặt hệ thống điện công nghiệp cho nhà máy, xưởng sản xuất.',
        'Tư vấn và triển khai hệ thống tự động hóa trong quy trình sản xuất công nghiệp.',
        'Cung cấp các thiết bị, linh kiện điện công nghiệp đạt tiêu chuẩn quốc tế.',
        'Bảo trì, sửa chữa và nâng cấp hệ thống điện và tự động hóa.'
      ]
    },
    // Add more slides as needed
  ];
  prevSlide(){
      this.currentSlide = (this.currentSlide + 1 - this.slides.length) % this.slides.length;
  }
  nextSlide(){
    if(this.currentSlide < this.slides.length - 1){
      this.currentSlide++;
    }
    else{
      this.currentSlide = 0;
    }
  }
  // get slidePosition(){
  //   return -this.currentSlide * 100;
  // }
}
