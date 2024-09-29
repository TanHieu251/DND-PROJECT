
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-p002-company',
  templateUrl: './p002-company.component.html',
  styleUrls: ['./p002-company.component.scss']
})
export class P002CompanyComponent implements OnInit, OnDestroy{

  currentIndex = 0;
  autoSlideInterval:any;
  ngOnInit(): void {
    this.autoSlideInterval = setInterval(() =>{
      this.nextSlide();
    },1500)
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    if(this.autoSlideInterval){
      clearInterval(this.autoSlideInterval)
    }
    // throw new Error('Method not implemented.');
  }
  slides = [
    { image: 'assets/companybanne.png', title: 'Tên công ty', description: 'Công Ty TNHH sản xuất Thương mại Dịch vụ DND' },
    { image: 'assets/linhvuc.png', title: 'Lĩnh vực hoạt động', description: 'Điện công nghiệp và Tự động hóa' },
    { image: 'assets/linhvuc.png', title: 'Slide 3', description: 'Description for slide 3' }
  ];

  get slidePosition() {
    return - this.currentIndex * 100;
  }

  nextSlide() {
    // this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    if(this.currentIndex < this.slides.length - 1){
      this.currentIndex++;
    }
    else{
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex + 1 - this.slides.length) % this.slides.length;
  }

}
