import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-project-slide',
  templateUrl: './project-slide.component.html',
  styleUrl: './project-slide.component.scss'
})
export class ProjectSlideComponent {
  @Input() titleBig: string='Title Big'
  @Input() title: string= 'Title';
  @Input() description: string= 'Description';
  @Input() imageSrc: string= 'assets/images/projectimage.jpg';
  @Input() buttonText: string='Xem thêm dự án';

  constructor(private router: Router){}

  goToProject(){
    this.router.navigate(['/projects']).then(() =>{
      window.scrollTo({top: 0, behavior:'smooth'});
    })
  }
  projects = [
    {
      title: 'Nhà máy điện Trạch Nhơn 3 và 4',
      description: 'Dự án nhà máy điện Nhơn Trạch 3, 4 là công trình trọng điểm quốc gia, được xây dựng tại khu công nghiệp Ông Kèo, xã Phước Khánh, huyện Nhơn Trạch, tỉnh Đồng Nai. Dự án có quy mô công suất 1.500MW, tổng mức đầu tư 1,4 tỷ USD. Khi đi vào hoạt động, dự án sẽ bổ sung khoảng 9 tỷ kWh điện/năm cho hệ thống điện quốc gia.',
      imageSrc: 'https://lilama.com.vn/sites/default/files/2_14.jpg',
      link: ''
    },
    {
      title: 'Công trình cầu vượt Thủ Thiêm',
      description: 'Cầu vượt Thủ Thiêm là một trong những dự án giao thông quan trọng tại TP.HCM, nối liền quận 2 và quận 1. Với tổng vốn đầu tư 800 triệu USD, dự án hứa hẹn sẽ giảm tải giao thông khu vực trung tâm, đồng thời tạo động lực phát triển kinh tế khu vực Thủ Thiêm.',
      imageSrc: 'assets/projectimage.png',
      link: ''
    },
    {
      title: 'Dự án đường cao tốc Bắc - Nam',
      description: 'Dự án đường cao tốc Bắc - Nam là công trình trọng điểm quốc gia với chiều dài hơn 2.100km, đi qua 20 tỉnh, thành phố từ Bắc vào Nam. Tổng mức đầu tư khoảng 12 tỷ USD, khi hoàn thành sẽ rút ngắn thời gian di chuyển giữa các vùng và phát triển kinh tế - xã hội.',
      imageSrc: 'assets/caotocBN.png',
      link: ''
    },
    {
      title: 'Nhà máy nước Củ Chi',
      description: 'Nhà máy nước Củ Chi là dự án quan trọng nhằm cung cấp nước sạch cho khu vực phía Tây TP.HCM. Với tổng công suất 500.000m³/ngày, dự án sẽ góp phần cải thiện chất lượng nước sinh hoạt cho người dân. Tổng mức đầu tư của dự án là 500 triệu USD.',
      imageSrc: 'assets/nhamaynuoc.png',
      link: ''
    }
  ]

  currentProjectIndex = 0;


  nextProject(){
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length
  }
  prevProject(){
    // this.currentProjectIndex =
    // (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;

  }
}
