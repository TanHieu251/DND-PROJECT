import { Component } from '@angular/core';
import { serviceData } from '../../../../../data/product';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrl: './service-content.component.scss'
})
export class ServiceContentComponent {
  serviceData = serviceData;
}
