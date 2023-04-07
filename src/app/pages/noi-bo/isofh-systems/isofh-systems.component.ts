import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-isofh-systems',
    templateUrl: './isofh-systems.component.html',
    styleUrls: ['./isofh-systems.component.scss']
})
export class IsofhSystemsComponent implements OnInit {

    constructor() {
    }

    user = {
        avatar: '../assets/images/isofh.jpg',
        profileProgress: 60,
        about: 'Dịch vụ nội bộ công ty IsofH, máy thông tin các máy chủ nội bộ',
        email: 'tuan.bd@isofh.com',
        phone: '0934010704',
        address: 'Ngồi bàn thứ 2 từ chỗ anh Thiện vào',
        skills: ['UI Design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
    }

    ngOnInit(): void {
    }

}
