import { Component } from '@angular/core';

@Component({
  selector: 'app-p-footer',
  templateUrl: './p-footer.component.html',
  styleUrl: './p-footer.component.scss'
})
export class PFooterComponent {
  contactInfo = {
    companyName: 'Công Ty TNHH sản xuất Thương mại Dịch vụ DND',
    phone: '039510844',
    email: 'shinodtkt.com',
  };

  servicePolicies = [
    { title: 'Hướng dẫn thanh toán', link: '' },
  ];

  customerSupport = {
    serviceConsultation: 'Tư vấn dịch vụ: 0395100846',
    feedback: 'Phản hồi góp ý: 0395100845',
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/tanhieu36/', iconClass: 'fab fa-facebook fa-2x' },
      { platform: 'Instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram fa-2x' },
    ],
  };
}
