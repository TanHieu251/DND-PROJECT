import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-contact',
  templateUrl: './c-contact.component.html',
  styleUrl: './c-contact.component.scss'
})
export class CContactComponent {
  contactForm: FormGroup;

  contactInfo = {
    address: "Tòa nhà Sonatus - Số 15 Lê Thánh Tôn, phường Bến Nghé, Quận 1, TP.HCM",
    phone: "033 258 7777",
    email: "service.vn@dnd.com",
    website: "https://dnd.vn",
    socialLinks: [
      // { name: 'Facebook', url: 'https://www.facebook.com/tanhieu36/', link: '#' },
      // { name: 'LinkedIn', url: 'assets/icon-linkedin.png', link: '#' },
      // { name: 'YouTube', url: 'assets/icon-youtube.png', link: '#' }
      { platform: 'Facebook', url: 'https://www.facebook.com/tanhieu36/', iconClass: 'fab fa-facebook fa-2x' },
      { platform: 'Instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram fa-2x' },
      { platform: 'Linkedin', url: 'https://www.linkedin.com/learning/', iconClass: 'fa-brands fa-linkedin fa-2x' },
    ]
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      company: ['', Validators.required],
      businessField: ['', Validators.required],
      role: ['', Validators.required],
      referenceDevice: ['', Validators.required],
      other: ['']
    });
  }

  // Hàm xử lý khi form được submit
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Submitted form data: ', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
