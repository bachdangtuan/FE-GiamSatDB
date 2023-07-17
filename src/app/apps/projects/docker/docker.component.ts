import {Component, Injector, OnInit} from '@angular/core';
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {FormSearchVirtualMachineHelper} from "../../../core/helpers/formSearchVirtualMachine.helper";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {ExcelService} from "../../../core/service/excel.service";
import {COLUMN_MONITOR, COLUMN_MONITOR_CONTAINER} from "../../../core/constants/common";
import moment from "moment/moment";
import {VirtualmachineService} from "../../../core/service/virtualmachine.service";
import {ContainerserviceService} from "../../../core/service/containerservice.service";

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

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
      public ContainerserviceService: ContainerserviceService
  ) {
    this.formSearchAndFilter = formService.form;
    titleService.setTitle("List Thông tin | Hệ thống quản lý máy chủ dự án");
  }


  initTableCofig(): void {
    this.columns = COLUMN_MONITOR_CONTAINER
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.infoVitual = params?.container
      this.formSearchAndFilter.patchValue({
        container: params.container,
      });
    })
    this.initTableCofig()
    this.getContainerList()
  }

  updatePage(data: number): void {
    // console.log('data',data)
    this.formService.form.patchValue({
      page: data,
    });
  }

  getContainerList() {
    const params$ = this.route.queryParams;
    params$.subscribe(param => {
      this.ContainerserviceService.getInfoContainerService(param).subscribe(res => {
        console.log('data trả về', res)
        this.totalItems = res?.listServiceContainers.count
        this.records = res?.listServiceContainers.rows
        this.limit = res.limit
        this.pageCurrent = res?.thisPage
      })
    })
  }

  exportData(): void {
    console.log('this.records', this.records)
    const newData = this.records.map(item => ({
      "Container Service": item.nameServiceContainer,
      "Địa chỉ IP": item.ipaddress,
      "CPU(theo %)": item.cpu,
      "RAM(theo %)": item.ram,
      "ngày check": moment.utc(item.createdAt).utcOffset(0).format("DD/MM/YYYY HH:mm")
    }));
    console.log('newData', newData)
    this.excelService.exportToExcel(newData, 'Container Service');
  }
}
