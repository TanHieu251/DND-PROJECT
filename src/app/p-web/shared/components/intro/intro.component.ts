import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  textActive: boolean = false;
  imgActive: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event):void{
  //   const textContainer = document.querySelector('.text-continer') as HTMLElement;
  //   const imageBox = document.querySelector('.image-box') as HTMLElement;

  //   const containerPosition = textContainer.getBoundingClientRect();

  //   if(containerPosition.top < window.innerHeight && containerPosition.bottom >= 0 ){
  //     this.textActive = true;
  //     this.imgActive = true;
  //   }
  // }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const textContainer = document.querySelector('.text-container') as HTMLElement;
    const imageBox = document.querySelector('.image-box') as HTMLElement;

    const containerPosition = textContainer.getBoundingClientRect();

    if (containerPosition.top < window.innerHeight && containerPosition.bottom >= 0) {
      this.textActive = true;
      this.imgActive = true;
    }
  }
}
