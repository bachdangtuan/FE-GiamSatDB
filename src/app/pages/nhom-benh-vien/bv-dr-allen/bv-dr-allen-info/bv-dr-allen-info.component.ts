import {Component, OnInit} from '@angular/core';
import {BV_Allen, BVE_VM} from "../../../data/data-info";
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-dr-allen-info',
    templateUrl: './bv-dr-allen-info.component.html',
    styleUrls: ['./bv-dr-allen-info.component.scss']
})
export class BvDrAllenInfoComponent implements OnInit {

    serverPhysical: any
    user: any
    projectID = 7;
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
