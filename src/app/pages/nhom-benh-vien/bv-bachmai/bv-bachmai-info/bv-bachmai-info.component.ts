import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-bachmai-info',
    templateUrl: './bv-bachmai-info.component.html',
    styleUrls: ['./bv-bachmai-info.component.scss']
})
export class BvBachmaiInfoComponent implements OnInit {
    serverPhysical: any
    user: any
    projectID = 10;
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
