import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bv-xanhphon-info',
  templateUrl: './bv-xanhphon-info.component.html',
  styleUrls: ['./bv-xanhphon-info.component.scss']
})
export class BvXanhphonInfoComponent implements OnInit {

  constructor() { }
  user = {
    avatar: '../assets/images/benhvien/xanhphon.png',
    profileProgress: 60,
    about: 'Bệnh viện Đa khoa Xanh Pôn (Xanh Pôn là cách phiên âm từ L\'Hôpital de Saint-Paul trong tiếng Pháp, nghĩa là Bệnh viện Thánh Phaolô) là một bệnh viện đa khoa tuyến cuối trực thuộc Sở Y tế Hà Nội.',
    email: '......',
    phone: '0438233075',
    address: '12 Chu Văn An, Ba Đình, Hà Nội\n',
    skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
  }
  ngOnInit(): void {
  }


}
