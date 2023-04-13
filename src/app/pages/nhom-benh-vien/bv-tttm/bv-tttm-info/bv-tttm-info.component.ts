import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bv-tttm-info',
  templateUrl: './bv-tttm-info.component.html',
  styleUrls: ['./bv-tttm-info.component.scss']
})
export class BvTttmInfoComponent implements OnInit {

  constructor() { }
  user = {
    avatar: '../assets/images/benhvien/viene.png',
    profileProgress: 60,
    about: 'Văn phòng Trung tâm Tim mạch đi vào hoạt động ngay từ những ngày đầu thành lập Trung tâm để thực hiện các chức năng nhiệm vụ quy định trong Điều lệ hoạt động của Trung tâm Tim mạch.',
    email: 'bvetuvanonline@gmail.com',
    phone: '081.846.7686',
    address: '89 Trần Cung - Nghĩa Tân - Cầu Giấy - Hà Nội',
    skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
  }
  ngOnInit(): void {
  }

}
