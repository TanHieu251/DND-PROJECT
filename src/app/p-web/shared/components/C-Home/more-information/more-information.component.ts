import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrl: './more-information.component.scss'
})
export class MoreInformationComponent {
@Input() imageSrc: string='image description...'
@Input() title: string='More Information';

  infos = [
    {
      title: 'Tủ điện động lực',
      imageUrl: 'assets/tudiendongluc.png',
      link:''
    },
    {
      title: 'Hệ thống chống sét',
      imageUrl: 'assets/hethongchongset.png',
      link:''
    },
    {
      title: 'Trạm biến áp',
      imageUrl: 'assets/trambienap.png',
      link:''
    },
    {
      title: 'Hệ thống chiếu sáng',
      imageUrl: 'assets/hethognchieusang.png',
      link:''
    },
    {
      title: 'ATS',
      imageUrl: 'assets/ats.png',
      link:''
    },
    {
      title: 'TrunKing – Tray cable – Ladder cable',
      imageUrl: 'assets/tray.png',
      link:''
    }
  ];
}
