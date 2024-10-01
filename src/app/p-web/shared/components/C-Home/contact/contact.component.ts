import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() title: string = 'Welcome';
  @Input() description: string = 'Default description text goes here...';
  @Input() imageSrc: string = 'assets/image3.png';
  @Input() buttonText: string = 'Xem Công Ty';
  @Input() isLeft: boolean = false;

  textActive: boolean = false;
  imgActive: boolean = false;
  contacts =[
    {
      title:'Việc làm và sự nghiệp',
      description:'Con người của chúng tôi tạo nên sự khác biệt. Chúng kết nối, sáng tạo và giúp chúng ta đi đúng hướng trong việc thay đổi hệ thống năng lượng của thế giới. Tìm hiểu thêm về sự nghiệp tại DND và cách bạn có thể làm cho ngày mai trở nên khác biệt ngay hôm nay.',
      buttonText:'Liên hệ',
      imageSrc:'assets/image 4.png',
    }
  ]

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const containerPosition = this.elementRef.nativeElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (containerPosition < screenPosition) {
      this.textActive = true;
      this.imgActive = true;
    } else{
      this.textActive=false;
      this.imgActive=false;
    }
  }
}
