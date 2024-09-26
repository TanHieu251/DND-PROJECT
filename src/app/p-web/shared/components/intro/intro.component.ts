import { Component, HostListener, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  @Input() title: string = 'Welcome';
  @Input() description: string = 'Default description text goes here...';
  @Input() imageSrc: string = 'assets/image3.png';
  @Input() buttonText: string = 'Xem Công Ty';
  @Input() isRight: boolean = false;  // For components with image on the right
  @Input() isLeft: boolean = true;    // For components with image on the left

  textActive: boolean = false;
  imgActive: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const containerPosition = this.elementRef.nativeElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (containerPosition < screenPosition) {
      this.textActive = true;
      this.imgActive = true;
    }
  }
}
