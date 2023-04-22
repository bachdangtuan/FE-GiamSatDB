import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../profile.model';
import {BreadcrumbItem} from "../../../../shared/page-title/page-title/page-title.model";
import {COLUMN_LOG, COLUMN_SERVER_PHYSICAL} from "../../../../core/constants/common";
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    @Input() messages: any[] = [];
    pageTitle: BreadcrumbItem[] = [];
    limit: any
    pageCurrent: any
    records: any[] = [];
    columns: any[] = [];
    totalItems: any

    constructor(
        private router: Router
    ) {
        this.initTableCofig()
    }

    ngOnInit(): void {
        console.log('messages', this.messages)
        this.records = this.messages
        this.limit = 10;
        this.totalItems = this.messages.length;
        this.pageCurrent = 1;


    }

    initTableCofig(): void {
        this.columns = COLUMN_SERVER_PHYSICAL
    }

    updatePage(data: number): void {
        // this.formService.form.patchValue({
        //   page: data,
        // });
    }

    showDetail(service: any) {
        this.router.navigate(['/apps/projects/details'], { queryParams: { id: service } });
    }

}
