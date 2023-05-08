import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../../core/service/project.service";

@Component({
    selector: 'app-bv-mediplus-info',
    templateUrl: './bv-mediplus-info.component.html',
    styleUrls: ['./bv-mediplus-info.component.scss']
})
export class BvMediplusInfoComponent implements OnInit {

    serverPhysical: any
    user: any
    projectID = 3;
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
