import {Component, OnInit} from '@angular/core';
import {BVE_VM, YTCC} from "../../../data/data-info";
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-ytcc-info',
    templateUrl: './bv-ytcc-info.component.html',
    styleUrls: ['./bv-ytcc-info.component.scss']
})
export class BvYtccInfoComponent implements OnInit {

    serverPhysical: any
    user: any
    projectID = 5;
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
