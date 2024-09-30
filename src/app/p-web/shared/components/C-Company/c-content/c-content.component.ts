import { Component, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-c-content',
  templateUrl: './c-content.component.html',
  styleUrl: './c-content.component.scss'
})
export class CContentComponent {

    section: any;
    // selectedSection = this.sections[0];

    contentCompany = [
      {
        title: 'Tầm nhìn và sứ mệnh',
        description: 'Công ty TNHH Sản Xuất Thương Mại Dịch Vụ DND cam kết trở thành đơn vị hàng đầu trong lĩnh vực điện công nghiệp và tự động hóa, cung cấp những giải pháp tối ưu giúp nâng cao hiệu suất, tiết kiệm năng lượng và đảm bảo an toàn cho các hệ thống sản xuất công nghiệp. Chúng tôi hướng đến xây dựng một tương lai bền vững thông qua việc áp dụng công nghệ tiên tiến và giải pháp tự động hóa thông minh vào từng dự án của mình.',
        imageSrc: 'assets/tamnhinsumenh.png'
      },
      {
        title: 'Giá trị cốt lõi',
        description: 'Chất lượng: Đảm bảo cung cấp sản phẩm và dịch vụ với chất lượng cao nhất, vượt qua mọi kỳ vọng của khách hàng. Đổi mới: Luôn cập nhật và ứng dụng các công nghệ tiên tiến nhất vào hệ thống tự động hóa và điện công nghiệp. Tận tâm: Chúng tôi luôn lắng nghe, thấu hiểu và đưa ra các giải pháp tối ưu nhất cho từng yêu cầu cụ thể của khách hàng.',
        imageSrc: 'assets/giatricotloi.png'
      },
      {
        title: 'Sản phẩm và dịch vụ',
        description: 'Công ty DND chuyên cung cấp các sản phẩm và giải pháp trong lĩnh vực điện công nghiệp và tự động hóa, bao gồm: Thiết kế và lắp đặt hệ thống điện công nghiệp cho nhà máy, xưởng sản xuất. Tư vấn và triển khai hệ thống tự động hóa trong quy trình sản xuất công nghiệp. Cung cấp các thiết bị, linh kiện điện công nghiệp đạt tiêu chuẩn quốc tế. Bảo trì, sửa chữa và nâng cấp hệ thống điện và tự động hóa.',
        imageSrc: 'assets/sanphamdichvu.png'
      },
      {
        title: 'Khách hàng và đối tác',
        description: 'Chúng tôi tự hào được đồng hành cùng nhiều đối tác và khách hàng lớn trong các lĩnh vực công nghiệp chế tạo, xây dựng, và năng lượng, đảm bảo mang lại các giải pháp toàn diện và bền vững.',
        imageSrc: 'assets/khachhangdoitac.png'
      },
      {
        title: 'Cam kết chất lượng',
        description: 'Công ty TNHH DND cam kết mang lại những sản phẩm và dịch vụ với tiêu chuẩn chất lượng cao nhất. Chúng tôi luôn đề cao sự an toàn, hiệu quả, và tối ưu chi phí trong mọi giải pháp mà mình cung cấp.',
        imageSrc: 'assets/camketchatluong.png'
      },
      {
        title: 'Mục tiêu phát triển',
        description: 'Trong những năm tới, DND sẽ tiếp tục đầu tư vào công nghệ và nhân lực nhằm mở rộng thị trường, trở thành đối tác tin cậy cho các doanh nghiệp trong và ngoài nước trong lĩnh vực điện công nghiệp và tự động hóa.',
        imageSrc: 'assets/camketchatluong.png'
      },
    ]
  textActive: boolean = false;
  imgActive: boolean = false;

  // constructor(private elementRef: ElementRef) {}
  // @HostListener('window:scroll',['$event'])
  //   onScroll():void{
  //     const containerPosition = this.elementRef.nativeElement.getBoundingClientRect().top;
  //     const screenPosition = window.innerHeight;

  //     if(containerPosition < screenPosition){
  //       this.textActive = true;
  //       this.imgActive = true;
  //     } else{
  //       this.textActive = false;
  //       this.imgActive = false;
  //     }
  //   }
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const sections = this.elementRef.nativeElement.querySelectorAll('.section');

    sections.forEach((section: Element) => { // Specify 'Element' as the type
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        section.classList.add('active'); // Add active class to show section
      } else {
        section.classList.remove('active'); // Remove active class when out of view
      }
    });
  }
}
