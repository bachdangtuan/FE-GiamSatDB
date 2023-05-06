import {Component, OnInit} from '@angular/core';
import {BVE_INFO, BVE_VM, ISOFH_VM} from "../../../data/data-info";
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-e-info',
    templateUrl: './bv-e-info.component.html',
    styleUrls: ['./bv-e-info.component.scss']
})
export class BvEInfoComponent implements OnInit {

    serverPhysical: any
    user: any
    projectID = 2;
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
