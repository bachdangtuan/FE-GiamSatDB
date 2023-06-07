import {Component, Injector, OnInit} from '@angular/core';
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormSearchLogHelper} from "../../../core/helpers/formSearchLog.helper";
import {LogBackupService} from "../../../core/service/log-backup.service";
import {COLUMN_LOG} from "../../../core/constants/common";

@Component({
    selector: 'app-bv-pk40',
    templateUrl: './bv-pk40.component.html',
    styleUrls: ['./bv-pk40.component.scss']
})
export class BvPk40Component implements OnInit {

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
        this.pageTitle = [{label: 'Log Backup Phòng khám 4.0', path: '/', active: true}];
        this.formSearchAndFilter.patchValue({
            hostName: 'patroni1',
            nameDatabase: 'sakura_pk40',
            page: 1,
            limit: 6,
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
