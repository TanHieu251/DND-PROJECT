import {
  Component,
  HostListener,
  Input,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../../../service/company-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../../../p-lib/until/until';
import { NotificationServiceService } from '../../../../../p-lib/services/notification-service.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Welcome';
  @Input() description: string = 'Default description text goes here...';
  @Input() imageSrc: string = 'assets/image3.png';
  @Input() buttonText: string = 'Xem Công Ty';

  //common variable
  Unsubscribe = new Subject<void>();
  Company: any = {};

  textActive: boolean = false;
  imgActive: boolean = false;

  informations = [
    {
      title: 'Welcome',
      description:
        'Tại DND, chúng tôi trao quyền cho mọi người bằng công nghệ để thúc đẩy quá trình chuyển đổi các ngành công nghiệp cần thiết nhằm tạo dựng một xã hội ít carbon và giải quyết các thách thức năng lượng của thế giới.',
      buttonText: 'Xem Công Ty',
      imageSrc: 'assets/image 3.png',
    },
  ];

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private companyService: CompanyServiceService,
    private nofiService: NotificationServiceService
  ) {}
  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  ngOnInit(): void {
    this.APIGetCompany();
  }

  goToCompany() {
    this.router.navigate(['/about']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const containerPosition =
      this.elementRef.nativeElement.getBoundingClientRect().bottom;
    const screenPosition = window.innerHeight;

    if (containerPosition < screenPosition) {
      this.textActive = true;
      this.imgActive = true;
    } else {
      // this.textActive=false;
      // this.imgActive=false;
    }
  }

  //#region API
  APIGetCompany() {
    return this.companyService
      .GetCompany()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.Company = res.data;
            console.log(this.Company)
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          );
        }
      );
  }
  //#endregion
}
