import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bv-mediplus-info',
  templateUrl: './bv-mediplus-info.component.html',
  styleUrls: ['./bv-mediplus-info.component.scss']
})
export class BvMediplusInfoComponent implements OnInit {

  constructor() { }
  user = {
    avatar: '../assets/images/benhvien/mediplus.png',
    profileProgress: 60,
    about: 'Tổ hợp Y tế MEDIPLUS – Ứng dụng sự đổi mới trong công nghệ và áp dụng mô hình y tế “chuẩn Singapore”, mang lại cho người dân dịch vụ khám chữa bệnh chất lượng cao, tiếp cận phương pháp, kỹ thuật và phác đồ hiện đại, được hưởng các dịch vụ cao cấp “đi khám như đi nghỉ dưỡng” như ở nước ngoài và góp phần phát triển bền vững hệ sinh thái y tế Việt Nam.',
    email: 'info@mediplus.vn',
    phone: '0899663366',
    address: 'Tầng 2, TTTM Mandarin Garden 2, Phường Tân Mai, Quận Hoàng Mai, Thành phố Hà Nội',
    skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
  }
  ngOnInit(): void {
  }

}
