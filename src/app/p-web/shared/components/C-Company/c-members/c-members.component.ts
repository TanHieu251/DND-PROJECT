import { Component } from '@angular/core';

@Component({
  selector: 'app-c-members',
  templateUrl: './c-members.component.html',
  styleUrl: './c-members.component.scss'
})
export class CMembersComponent {

  members=[
    {
      image:'assets/logo.png',
      name:'Bùi Tấn Hiếu'
    },
    {
      image:'assets/logo.png',
      name:'Bùi Tấn Hiếu'
    },
    {
      image:'assets/logo.png',
      name:'Bùi Tấn Hiếu'
    },
    {
      image:'assets/logo.png',
      name:'Bùi Tấn Hiếu'
    },
  ]

}
