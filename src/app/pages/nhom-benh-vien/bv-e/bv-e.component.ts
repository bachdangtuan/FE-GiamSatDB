import {Component, Injector, OnInit} from '@angular/core';
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormSearchLogHelper} from "../../../core/helpers/formSearchLog.helper";
import {LogBackupService} from "../../../core/service/log-backup.service";
import {COLUMN_LOG} from "../../../core/constants/common";

@Component({
    selector: 'app-bv-e',
    templateUrl: './bv-e.component.html',
    styleUrls: ['./bv-e.component.scss']
})
export class BvEComponent implements OnInit {

    @SyncQueryParam({
        parseIgnore: ["status"],
    })
    public formSearchAndFilter: FormGroup;
    pageTitle: BreadcrumbItem[] = [];
    limit: any
    pageCurrent: any
    records: any[] = [];
    columns: any[] = [];
    totalItems: any;

    constructor(
        public injector: Injector,
        private route: ActivatedRoute,
        private formService: FormSearchLogHelper,
        private LogService: LogBackupService,
        public router: Router,
    ) {
        this.formSearchAndFilter = formService.form;
        this.getLogList()
        this.initTableCofig()
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Log Backup BVE', path: '/', active: true}];
        this.formSearchAndFilter.patchValue({
            hostName: 'bve-db-slave-247',
            nameDatabase: ''
        });
    }

    initTableCofig(): void {
        this.columns = COLUMN_LOG
    }

    getLogList() {
        const params$ = this.route.queryParams;
        console.log('params$', params$)
        params$.subscribe(param => {
            this.LogService.getListLogging(param).subscribe(res => {
                console.log(res)
                this.totalItems = res?.totalItems
                this.records = res.data
                this.limit = res.limit
                this.pageCurrent = res?.thisPage
            })
        })
    }


    updatePage(data: number): void {
        this.formService.form.patchValue({
            page: data,
        });
    }

}
