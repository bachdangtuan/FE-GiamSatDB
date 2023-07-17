import {Component, Injector, OnInit} from '@angular/core';
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {ExcelService} from "../../../core/service/excel.service";
import {COLUMN_MONITOR_CONTAINER, COLUMN_MONITOR_PARTITION_DISK} from "../../../core/constants/common";
import moment from "moment";
import {ContainerserviceService} from "../../../core/service/containerservice.service";
import {DiskpartitionService} from "../../../core/service/diskpartition.service"
import {FormSearchDiskHelper} from "../../../core/helpers/formSearchDisk.helper";

@Component({
    selector: 'app-docker',
    templateUrl: './disk.component.html',
    styleUrls: ['./disk.component.scss']
})
export class DiskComponent implements OnInit {

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
        private formService: FormSearchDiskHelper,
        private titleService: Title,
        private route: ActivatedRoute,
        private excelService: ExcelService,
        public ContainerserviceService: ContainerserviceService,
        public DiskpartitionService: DiskpartitionService
    ) {
        this.formSearchAndFilter = formService.form;
        titleService.setTitle("List Thông tin | Hệ thống quản lý máy chủ dự án");
    }


    initTableCofig(): void {
        this.columns = COLUMN_MONITOR_PARTITION_DISK
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            console.log(params)
            // this.infoVitual = params?.virtual_id
            this.formSearchAndFilter.patchValue({
                virtual_id: params?.virtual_id,
            });
        })
        this.initTableCofig()
        this.getDiskList()
    }

    updatePage(data: number): void {
        this.formService.form.patchValue({
            page: data,
        });
    }

    getDiskList() {
        const params$ = this.route.queryParams;
        params$.subscribe(param => {
            this.DiskpartitionService.getInfoDiskService(param).subscribe(res => {
                console.log('data trả về', res)
                this.totalItems = res[0]?.total
                this.records = res[0]?.data
                this.limit = res[0]?.per_page
                this.pageCurrent = res[0]?.per_page
            })
        })
    }


    // exportData(): void {
    //     console.log('this.records', this.records)
    //     const newData = this.records.map(item => ({
    //         "Container Service": item.nameServiceContainer,
    //         "Địa chỉ IP": item.ipaddress,
    //         "CPU(theo %)": item.cpu,
    //         "RAM(theo %)": item.ram,
    //         "ngày check": moment.utc(item.createdAt).utcOffset(0).format("DD/MM/YYYY HH:mm")
    //     }));
    //     console.log('newData', newData)
    //     this.excelService.exportToExcel(newData, 'Container Service');
    // }
}

