import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {PROJECTACTIVITIES, PROJECTLIST} from '../shared/data';
import {Project, ProjectActivity} from '../shared/projects.model';
import {PhysicalMachineService} from "../../../core/service/physicalmachine.service";

@Component({
    selector: 'app-project-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    selectedProject!: Project;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private titleService: Title,
        private PhysicalMachineService: PhysicalMachineService
    ) {
        titleService.setTitle("Project Details | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template");
    }

    projectId: any;
    detailPhysicalMachine: any;
    listVirtualMachine: any;
    showListContainer: any;
    showListDisk: any;
    idVirtualMachine: any;

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.projectId = params['id'];
            console.log('params', this.projectId)
        })
        this.getPhysicalMachine()
    }

    getPhysicalMachine() {
        this.PhysicalMachineService.getCompanyDetail(this.projectId).pipe().subscribe(res => {
            this.detailPhysicalMachine = res[0]
            this.listVirtualMachine = res[0].listVirtualMachine.filter((vm: any, index: any, self: any) =>
                index === self.findIndex((v: any) => v.nameVirtualMachine === vm.nameVirtualMachine)
            );
            console.log('res', this.listVirtualMachine)
            // this.isDataLoaded = true;
        })
    }

    showDetailVM(id: any) {
        this.showListContainer = true;
        this.showListDisk = false;
        this.idVirtualMachine = id
    }

    showInfoVM(nameVirtualMachine: any) {
        this.router.navigate(['/apps/projects/list'], {queryParams: {nameVirtual: nameVirtualMachine}});
    }

    showDiskVM(id: any) {
        this.showListDisk = true
        this.showListContainer = false;
    }
}
