import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
  selector: 'app-bv-vietmy-info',
  templateUrl: './bv-vietmy-info.component.html',
  styleUrls: ['./bv-vietmy-info.component.scss']
})
export class BvVietmyInfoComponent implements OnInit {

  serverPhysical: any
  user: any
  projectID = 16;
  isDataLoaded: boolean = false;

  constructor(
      private ProjectService: ProjectService
  ) {
    this.getDetailCompany()
  }


  ngOnInit(): void {
  }

  getDetailCompany() {
    this.ProjectService.getCompanyDetail(this.projectID).pipe().subscribe(res => {
      this.user = res[0]
      this.serverPhysical = res[0]['listPhysicalMachine']
      console.log('res', res[0]['listPhysicalMachine'])
      this.isDataLoaded = true;
    })
  }
}
