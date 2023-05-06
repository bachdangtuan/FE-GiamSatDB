import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
  selector: 'app-bv-psta-info',
  templateUrl: './bv-psta-info.component.html',
  styleUrls: ['./bv-psta-info.component.scss']
})
export class BvPstaInfoComponent implements OnInit {
  serverPhysical: any
  user: any
  projectID = 20;
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
