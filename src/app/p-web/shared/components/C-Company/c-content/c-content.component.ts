import {
  Component,
  HostListener,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CompanyServiceService } from '../../../service/company-service.service';
import { NotificationServiceService } from '../../../../../p-lib/services/notification-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../../../p-lib/until/until';

@Component({
  selector: 'app-c-content',
  templateUrl: './c-content.component.html',
  styleUrl: './c-content.component.scss',
})
export class CContentComponent {
  section: any;
  @Input() Company: any = {};
  Unsubscribe = new Subject<void>();

  textActive: boolean = false;
  imgActive: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const sections = this.elementRef.nativeElement.querySelectorAll('.section');

    sections.forEach((section: Element) => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition <= screenPosition) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
}
