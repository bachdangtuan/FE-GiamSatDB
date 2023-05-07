import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {PROJECTACTIVITIES, PROJECTLIST} from '../shared/data';
import {Project, ProjectActivity} from '../shared/projects.model';

@Component({
    selector: 'app-project-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    selectedProject!: Project;

    constructor(private route: ActivatedRoute, private titleService: Title) {
        titleService.setTitle("Project Details | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template");
    }

    projectId: any;

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            this.projectId = params['id'];
            console.log('params', this.projectId)
        });

    }


}
