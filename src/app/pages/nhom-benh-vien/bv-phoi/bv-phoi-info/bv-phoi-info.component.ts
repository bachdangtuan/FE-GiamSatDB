import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
  selector: 'app-bv-phoi-info',
  templateUrl: './bv-phoi-info.component.html',
  styleUrls: ['./bv-phoi-info.component.scss']
})
export class BvPhoiInfoComponent implements OnInit {

  serverPhysical: any
  user: any
  projectID = 11;
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
