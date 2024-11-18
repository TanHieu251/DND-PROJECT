import { Component } from '@angular/core';
import { serviceData } from '../../../../../data/product';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss',
})
export class HomeServicesComponent {
  serviceItems= serviceData.slice(0,3);

}
