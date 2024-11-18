import { Component } from '@angular/core';

@Component({
  selector: 'app-new-banner',
  templateUrl: './new-banner.component.html',
  styleUrl: './new-banner.component.scss'
})
export class NewBannerComponent {
  slides = [
    
    // { image: 'assets/banner.jpg', title: 'Tên công ty', description: 'Công Ty TNHH sản xuất Thương mại Dịch vụ DND' },
    // { image: 'assets/bannerslide1.jpg', title: 'Lĩnh vực hoạt động', description: 'Điện công nghiệp và Tự động hóa' },
    // { image: 'assets/bannerslide2.jpg', title: '', description: '' },
    // { image: 'assets/perm-gres-4200285_1920.jpg', title: '', description: '' },\

  ];

  currentIndex= 0;
  autoSlideINterval: any;

  nextSlide() {
    if(this.currentIndex < this.slides.length - 1){
      this.currentIndex++;
    }
    else{
      this.currentIndex = 0;
    }
  }

  prevSlide(){
    this.currentIndex = (this.currentIndex + 1 - this.slides.length) % this.slides.length;
    // if(this.currentIdex > 0){
    //   this.currentIdex--;
    // }
    // else{
    //   this.currentIdex = this.slides.length - 1;
    // }
  }
  get slidePosition(){
    return -this.currentIndex * 100;
  }
  ngOnInit(): void {
    this.autoSlideINterval = setInterval (() =>{
      this.nextSlide();
    }, 3000)
  }
  ngOnDestroy(): void {
    if(this.autoSlideINterval){
      clearInterval(this.autoSlideINterval);
    }
  }
}
