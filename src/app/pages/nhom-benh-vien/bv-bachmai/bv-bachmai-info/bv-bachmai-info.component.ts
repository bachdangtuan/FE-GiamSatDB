import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bv-bachmai-info',
  templateUrl: './bv-bachmai-info.component.html',
  styleUrls: ['./bv-bachmai-info.component.scss']
})
export class BvBachmaiInfoComponent implements OnInit {

  constructor() { }
  user = {
    avatar: '../assets/images/benhvien/bachmai.png',
    profileProgress: 60,
    about: 'Bệnh viện Bạch Mai là bệnh viện đầu tiên trong nước được nhận danh hiệu đặc biệt. Hiện tại bệnh viện Bạch Mai có 1.400 giường bệnh, tất cả trưởng khoa, giám đốc các trung tâm đều có trình độ sau đại học. Tỉ lệ tử vong của bệnh nhân chỉ từ 0,8-0,9% và tỉ lệ sử dụng giường bệnh đạt 153% (so với tiêu chí đề ra là 85%).',
    email: '.......',
    phone: '+84 24 3869 3731',
    address: '78 Đường Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
    skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
  }
  ngOnInit(): void {
  }


}
