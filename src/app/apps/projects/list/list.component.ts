import {Component, Injector, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {COLUMN_MONITOR} from "../../../core/constants/common";
import {ActivatedRoute} from "@angular/router";
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {VirtualmachineService} from "../../../core/service/virtualmachine.service";
import {FormSearchVirtualMachineHelper} from "../../../core/helpers/formSearchVirtualMachine.helper";

@Component({
    selector: 'app-project-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @SyncQueryParam({
        parseIgnore: ["status"],
    })
    public formSearchAndFilter: FormGroup;
    columns: any[] = [];
    limit: any
    pageCurrent: any
    records: any[] = [];
    totalItems: any;
    infoVitual: any

    constructor(
        public injector: Injector,
        private formService: FormSearchVirtualMachineHelper,
        private titleService: Title,
        private route: ActivatedRoute,
        public VirtualmachineService:VirtualmachineService
    ) {
        this.formSearchAndFilter = formService.form;
        titleService.setTitle("List Thông tin | Hệ thống quản lý máy chủ dự án");
    }


    initTableCofig(): void {
        this.columns = COLUMN_MONITOR
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            console.log(params)
            this.infoVitual = params?.nameVirtual
            this.formSearchAndFilter.patchValue({
                nameVirtual: params.nameVirtual,
            });
        })
        this.initTableCofig()
        this.getVirtualMachineList()
    }

    updatePage(data: number): void {
        // console.log('data',data)
        this.formService.form.patchValue({
            page: data,
        });
    }

    getVirtualMachineList() {
        const params$ = this.route.queryParams;
        params$.subscribe(param => {
            this.VirtualmachineService.getInfoVirtualMachine(param).subscribe(res => {
                console.log('data trả về',res)
                this.totalItems = res?.listInfoDetailVM.count
                this.records = res?.listInfoDetailVM.rows
                this.limit = res.limit
                this.pageCurrent = res?.thisPage
            })
        })
    }

}
