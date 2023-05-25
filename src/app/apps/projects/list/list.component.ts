import {Component, Injector, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {COLUMN_MONITOR} from "../../../core/constants/common";
import {ActivatedRoute} from "@angular/router";
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {VirtualmachineService} from "../../../core/service/virtualmachine.service";
import {FormSearchVirtualMachineHelper} from "../../../core/helpers/formSearchVirtualMachine.helper";
import {ExcelService} from "../../../core/service/excel.service";
import moment from "moment";

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
        private excelService: ExcelService,
        public VirtualmachineService: VirtualmachineService
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
                console.log('data trả về', res)
                this.totalItems = res?.listInfoDetailVM.count
                this.records = res?.listInfoDetailVM.rows
                this.limit = res.limit
                this.pageCurrent = res?.thisPage
            })
        })
    }

    exportData(): void {
        console.log('this.records', this.records)
        // const newData = this.records.map(({ id, belongtoPhysicalMachine, ...rest }) => rest);
        // console.log(newData);

        const newData = this.records.map(item => ({
            "tên máy chủ": item.nameVirtualMachine,
            "địa chỉ IP": item.ipaddress,
            "cpu": item.cpu,
            "ram": item.ram,
            "usedram": item.usedram,
            "disk": item.disk,
            "diskused": item.diskused,
            "ngày check": moment.utc(item.createdAt).utcOffset(0).format("DD/MM/YYYY HH:mm")
        }));
        console.log('newData', newData)
        this.excelService.exportToExcel(newData, 'Tổng hợp dữ liệu');
    }


}
