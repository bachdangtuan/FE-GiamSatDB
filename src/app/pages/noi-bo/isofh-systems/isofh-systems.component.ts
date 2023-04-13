import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-isofh-systems',
    templateUrl: './isofh-systems.component.html',
    styleUrls: ['./isofh-systems.component.scss']
})
export class IsofhSystemsComponent implements OnInit {

    constructor() {
    }


    serverPhysicalIsofh = [
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
        {
            id: 1,
            ip:'10.0.0.92',
            type_machine: 'PowerEdge R740',
            cpu:'32 CPUs x Intel(R) Xeon(R) Gold 6226R CPU @ 2.90GHz',
            ram: '500Gb',
            disk: '1500Gb',
        },
    ]

    user = {
        avatar: '../assets/images/benhvien/isofh.png',
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
