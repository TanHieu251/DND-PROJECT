import { Component } from '@angular/core';
import { ImageProject } from '../../../../../data/product';

@Component({
  selector: 'app-image-project',
  templateUrl: './image-project.component.html',
  styleUrl: './image-project.component.scss'
})
export class ImageProjectComponent {
  images = ImageProject;
  
  ngOnInit(): void {
    console.log(this.images);
  }
}
