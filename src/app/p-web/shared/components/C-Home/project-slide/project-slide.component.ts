import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-slide',
  templateUrl: './project-slide.component.html',
  styleUrl: './project-slide.component.scss'
})
export class ProjectSlideComponent {
  @Input() titleBig: string='Title Big'
  @Input() title: string= 'Title';
  @Input() description: string= 'Description';
  @Input() imageSrc: string= 'assets/images/projectimage.jpg';
  @Input() buttonText: string='Xem thêm dự án'
}
