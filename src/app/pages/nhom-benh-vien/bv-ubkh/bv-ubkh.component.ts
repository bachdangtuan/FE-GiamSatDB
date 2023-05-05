import {Component, Injector, OnInit} from '@angular/core';
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormControl, FormGroup} from "@angular/forms";
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {Select2Data, Select2UpdateEvent} from "ng-select2-component";
import {ActivatedRoute, Router} from "@angular/router";
import {FormSearchLogHelper} from "../../../core/helpers/formSearchLog.helper";
import {LogBackupService} from "../../../core/service/log-backup.service";
import {COLUMN_LOG, STATUS, STATUS_BACKUP} from "../../../core/constants/common";

@Component({
    selector: 'app-bv-ubkh',
    templateUrl: './bv-ubkh.component.html',
    styleUrls: ['./bv-ubkh.component.scss']
})
export class BvUbkhComponent implements OnInit {

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
    nameDatabase: Select2Data = []
    statusDatabase: Select2Data = []


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
        this.formSearchAndFilter.patchValue({
            hostName: 'database-6-9',
            nameDatabase: '',
            page: 1,
            limit: 6,
        });
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Log Backup Mediplus', path: '/', active: true}];
        this.nameDatabase = STATUS;
        this.statusDatabase = STATUS_BACKUP
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

    changeSelectedName($event: Select2UpdateEvent) {
        const valueSearch = $event.options[0].value
        console.log(valueSearch)
        if (valueSearch !== '10') {
            this.formSearchAndFilter.addControl('nameDatabase', new FormControl())
            this.formSearchAndFilter.patchValue({
                nameDatabase: valueSearch,
            });
        } else {
            this.formSearchAndFilter.removeControl('nameDatabase')
        }


        // console.log('huihu', $event.options[0])
    }

    changeSelectedStatus($event: Select2UpdateEvent) {
        const valueSearch = $event.options[0].value
        console.log(valueSearch)
        if (valueSearch !== '10') {
            this.formSearchAndFilter.addControl('status', new FormControl())
            this.formSearchAndFilter.patchValue({
                status: valueSearch,
            });
        } else {
            this.formSearchAndFilter.removeControl('status')
        }
    }

}
