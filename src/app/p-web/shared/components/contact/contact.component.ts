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
