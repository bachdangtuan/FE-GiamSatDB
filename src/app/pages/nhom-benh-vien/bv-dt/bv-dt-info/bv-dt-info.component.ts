import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-dt-info',
    templateUrl: './bv-dt-info.component.html',
    styleUrls: ['./bv-dt-info.component.scss']
})
export class BvDtInfoComponent implements OnInit {
    serverPhysical: any
    user: any
    projectID = 21;
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
