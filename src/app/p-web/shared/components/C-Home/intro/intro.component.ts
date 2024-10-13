import { Component, HostListener, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() isRight: boolean = false;

  textActive: boolean = false;
  imgActive: boolean = false;


  informations =[{
    title:'Welcome',
    description:'Tại DND, chúng tôi trao quyền cho mọi người bằng công nghệ để thúc đẩy quá trình chuyển đổi các ngành công nghiệp cần thiết nhằm tạo dựng một xã hội ít carbon và giải quyết các thách thức năng lượng của thế giới.',
    buttonText:'Xem Công Ty',
    imageSrc:'assets/image 3.png',
  }]

  constructor(private elementRef: ElementRef, private router:Router) {}

  goToCompany(){
    this.router.navigate(['/about']).then(() =>{
      window.scrollTo({top: 0, behavior:'smooth'});
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const containerPosition = this.elementRef.nativeElement.getBoundingClientRect().bottom;
    const screenPosition = window.innerHeight;

    if (containerPosition < screenPosition) {
      this.textActive = true;
      this.imgActive = true;
    } else {
      // this.textActive=false;
      // this.imgActive=false;
    }
  }
}
