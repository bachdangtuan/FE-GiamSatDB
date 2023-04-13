import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bv-dr-allen-info',
  templateUrl: './bv-dr-allen-info.component.html',
  styleUrls: ['./bv-dr-allen-info.component.scss']
})
export class BvDrAllenInfoComponent implements OnInit {

  constructor() { }
  user = {
    avatar: '../assets/images/benhvien/drallen.png',
    profileProgress: 60,
    about: 'Bệnh viện E là bệnh viện đa khoa trung ương hạng I trực thuộc Bộ Y tế, được thành lập theo Quyết định số 175/TTg-Vg của Thủ tướng Chính phủ ngày 17 tháng 10 năm 1967 nhằm đáp ứng yêu cầu điều trị cho cán bộ, chiến sĩ từ chiến trường miền Nam ra. Trải qua 55 năm xây dựng và phát triển, với những thăng trầm của lịch sử, đội ngũ cán bộ, bác sĩ, nhân viên của Bệnh viện E đã vượt qua mọi khó khăn, hoàn thành xuất sắc nhiệm vụ mà Đảng, Chính phủ và Bộ Y tế giao.',
    email: 'bvetuvanonline@gmail.com',
    phone: '081.846.7686',
    address: '89 Trần Cung - Nghĩa Tân - Cầu Giấy - Hà Nội',
    skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
  }
  ngOnInit(): void {
  }


}
