import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bv-daihoc-y-info',
  templateUrl: './bv-daihoc-y-info.component.html',
  styleUrls: ['./bv-daihoc-y-info.component.scss']
})
export class BvDaihocYInfoComponent implements OnInit {

  constructor() { }
  user = {
    avatar: '../assets/images/benhvien/daihocy.png',
    profileProgress: 60,
    about: 'Bệnh viện Đại học Y Hà Nội được thành lập theo Quyết định số 137/QĐ-BYT ngày 16/01/2007 của Bộ trưởng Bộ Y tế và chính thức đi vào hoạt động ngày 19/9/2007.Bệnh viện Đại học Y Hà Nội thành lập là niềm mong muốn, ước mơ của nhiều thế hệ thầy và trò Trường Đại học Y Hà Nội.',
    email: 'benhviendaihocyhanoi@hmuh.vn',
    phone: '0982873112',
    address: 'Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội',
    skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
  }
  ngOnInit(): void {
  }


}
