import { Component } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
})
export class HomeNewsComponent {
  news = [
    {
      Title:
        'ĐIỆN LỰC THÁI NGUYÊN ĐƯA DỰ ÁN TRẠM BIẾN ÁP 110KV YÊN BÌNH 8 VÀO VẬN HÀNH',
      PostDate: '02/10/2024',
      FirstContent:
        'Công ty Điện lực Thái Nguyên (PC Thái Nguyên), đơn vị thuộc Tổng công ty Điện lực miền Bắc (EVNNPC) vừa tổ chức nghiệm thu và đóng điện thành công, đưa Trạm biến áp (TBA) 110kV Yên Bình 8 đi vào vận hành',
      SecondContent:
        'Dự án công trình đường dây và Trạm biến áp 110kV Yên Bình 8 được khởi công xây dựng vào ngày 18/03/2023. Đây là công trình năng lượng cấp II, nhóm B được xây dựng trên địa bàn khu dân cư Cống Thượng, phường Hồng Tiến, thành phố Phổ Yên, tỉnh Thái Nguyên.',
      ThirdContent:
        'Phần Trạm biến áp của dự án được xây dựng với quy mô 03 máy biến áp (MBA), công suất 3x63MVA (giai đoạn hiện tại lắp đặt 02 MBA). TBA được trang bị hệ thống thu thập, giám sát, đo đếm và điều khiển xa; hệ thống camera giám sát, phòng cháy chữa cháy tự động… đường truyền kết nối về trung tâm điều khiển khu vực, đảm bảo TBA đưa vào vận hành theo tiêu chí không người trực.',
      Thumbnail:
        'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
      ListImgContent: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
      ],
    },
    {
      Title:
        'ĐIỆN LỰC THÁI NGUYÊN ĐƯA DỰ ÁN TRẠM BIẾN ÁP 110KV YÊN BÌNH 8 VÀO VẬN HÀNH',
      PostDate: '02/10/2024',
      FirstContent:
        'Công ty Điện lực Thái Nguyên (PC Thái Nguyên), đơn vị thuộc Tổng công ty Điện lực miền Bắc (EVNNPC) vừa tổ chức nghiệm thu và đóng điện thành công, đưa Trạm biến áp (TBA) 110kV Yên Bình 8 đi vào vận hành',
      SecondContent:
        'Dự án công trình đường dây và Trạm biến áp 110kV Yên Bình 8 được khởi công xây dựng vào ngày 18/03/2023. Đây là công trình năng lượng cấp II, nhóm B được xây dựng trên địa bàn khu dân cư Cống Thượng, phường Hồng Tiến, thành phố Phổ Yên, tỉnh Thái Nguyên.',
      ThirdContent:
        'Phần Trạm biến áp của dự án được xây dựng với quy mô 03 máy biến áp (MBA), công suất 3x63MVA (giai đoạn hiện tại lắp đặt 02 MBA). TBA được trang bị hệ thống thu thập, giám sát, đo đếm và điều khiển xa; hệ thống camera giám sát, phòng cháy chữa cháy tự động… đường truyền kết nối về trung tâm điều khiển khu vực, đảm bảo TBA đưa vào vận hành theo tiêu chí không người trực.',
      Thumbnail:
        'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
      ListImgContent: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
      ],
    },
    {
      Title:
        'ĐIỆN LỰC THÁI NGUYÊN ĐƯA DỰ ÁN TRẠM BIẾN ÁP 110KV YÊN BÌNH 8 VÀO VẬN HÀNH',
      PostDate: '02/10/2024',
      FirstContent:
        'Công ty Điện lực Thái Nguyên (PC Thái Nguyên), đơn vị thuộc Tổng công ty Điện lực miền Bắc (EVNNPC) vừa tổ chức nghiệm thu và đóng điện thành công, đưa Trạm biến áp (TBA) 110kV Yên Bình 8 đi vào vận hành',
      SecondContent:
        'Dự án công trình đường dây và Trạm biến áp 110kV Yên Bình 8 được khởi công xây dựng vào ngày 18/03/2023. Đây là công trình năng lượng cấp II, nhóm B được xây dựng trên địa bàn khu dân cư Cống Thượng, phường Hồng Tiến, thành phố Phổ Yên, tỉnh Thái Nguyên.',
      ThirdContent:
        'Phần Trạm biến áp của dự án được xây dựng với quy mô 03 máy biến áp (MBA), công suất 3x63MVA (giai đoạn hiện tại lắp đặt 02 MBA). TBA được trang bị hệ thống thu thập, giám sát, đo đếm và điều khiển xa; hệ thống camera giám sát, phòng cháy chữa cháy tự động… đường truyền kết nối về trung tâm điều khiển khu vực, đảm bảo TBA đưa vào vận hành theo tiêu chí không người trực.',
      Thumbnail:
        'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
      ListImgContent: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
      ],
    },
    {
      Title:
        'ĐIỆN LỰC THÁI NGUYÊN ĐƯA DỰ ÁN TRẠM BIẾN ÁP 110KV YÊN BÌNH 8 VÀO VẬN HÀNH',
      PostDate: '02/10/2024',
      FirstContent:
        'Công ty Điện lực Thái Nguyên (PC Thái Nguyên), đơn vị thuộc Tổng công ty Điện lực miền Bắc (EVNNPC) vừa tổ chức nghiệm thu và đóng điện thành công, đưa Trạm biến áp (TBA) 110kV Yên Bình 8 đi vào vận hành',
      SecondContent:
        'Dự án công trình đường dây và Trạm biến áp 110kV Yên Bình 8 được khởi công xây dựng vào ngày 18/03/2023. Đây là công trình năng lượng cấp II, nhóm B được xây dựng trên địa bàn khu dân cư Cống Thượng, phường Hồng Tiến, thành phố Phổ Yên, tỉnh Thái Nguyên.',
      ThirdContent:
        'Phần Trạm biến áp của dự án được xây dựng với quy mô 03 máy biến áp (MBA), công suất 3x63MVA (giai đoạn hiện tại lắp đặt 02 MBA). TBA được trang bị hệ thống thu thập, giám sát, đo đếm và điều khiển xa; hệ thống camera giám sát, phòng cháy chữa cháy tự động… đường truyền kết nối về trung tâm điều khiển khu vực, đảm bảo TBA đưa vào vận hành theo tiêu chí không người trực.',
      Thumbnail:
        'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
      ListImgContent: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
      ],
    },
    {
      Title:
        'ĐIỆN LỰC THÁI NGUYÊN ĐƯA DỰ ÁN TRẠM BIẾN ÁP 110KV YÊN BÌNH 8 VÀO VẬN HÀNH',
      PostDate: '02/10/2024',
      FirstContent:
        'Công ty Điện lực Thái Nguyên (PC Thái Nguyên), đơn vị thuộc Tổng công ty Điện lực miền Bắc (EVNNPC) vừa tổ chức nghiệm thu và đóng điện thành công, đưa Trạm biến áp (TBA) 110kV Yên Bình 8 đi vào vận hành',
      SecondContent:
        'Dự án công trình đường dây và Trạm biến áp 110kV Yên Bình 8 được khởi công xây dựng vào ngày 18/03/2023. Đây là công trình năng lượng cấp II, nhóm B được xây dựng trên địa bàn khu dân cư Cống Thượng, phường Hồng Tiến, thành phố Phổ Yên, tỉnh Thái Nguyên.',
      ThirdContent:
        'Phần Trạm biến áp của dự án được xây dựng với quy mô 03 máy biến áp (MBA), công suất 3x63MVA (giai đoạn hiện tại lắp đặt 02 MBA). TBA được trang bị hệ thống thu thập, giám sát, đo đếm và điều khiển xa; hệ thống camera giám sát, phòng cháy chữa cháy tự động… đường truyền kết nối về trung tâm điều khiển khu vực, đảm bảo TBA đưa vào vận hành theo tiêu chí không người trực.',
      Thumbnail:
        'https://npc.com.vn/Uploads/PublicImage/2023/09/16/16/z4698433368481-73815f0c16d89d448d3e547f0cfa5efb.jpg',
      ListImgContent: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Feih.com.vn%2Fnews%2F10&psig=AOvVaw2OC3l6ufbyFqYil85SCHfo&ust=1729514146326000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIguT8nIkDFQAAAAAdAAAAABAE',
      ],
    },
  ];
}
