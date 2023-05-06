import {Component, OnInit} from '@angular/core';
import {BV_XANHPHON, BVE_VM, XANH_PHON} from "../../../data/data-info";
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-xanhphon-info',
    templateUrl: './bv-xanhphon-info.component.html',
    styleUrls: ['./bv-xanhphon-info.component.scss']
})
export class BvXanhphonInfoComponent implements OnInit {

    serverPhysical: any
    user: any
    projectID = 4;
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
