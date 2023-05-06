import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-ctm-info',
    templateUrl: './bv-ctm-info.component.html',
    styleUrls: ['./bv-ctm-info.component.scss']
})
export class BvCtmInfoComponent implements OnInit {
    serverPhysical: any
    user: any
    projectID = 15;
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
