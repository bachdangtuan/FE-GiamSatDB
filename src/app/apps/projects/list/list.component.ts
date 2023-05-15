import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {COLUMN_MONITOR} from "../../../core/constants/common";

@Component({
    selector: 'app-project-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    columns: any[] = [];

    constructor(private titleService: Title) {
        titleService.setTitle("List Thông tin | Hệ thống quản lý máy chủ dự án");
    }


    initTableCofig(): void {
        this.columns = COLUMN_MONITOR
    }

    ngOnInit(): void {
        this.initTableCofig()
    }


}
