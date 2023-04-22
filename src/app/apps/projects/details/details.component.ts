import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PROJECTACTIVITIES, PROJECTLIST } from '../shared/data';
import { Project, ProjectActivity } from '../shared/projects.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  selectedProject!: Project;
  projectActivities: ProjectActivity[] = [];

  constructor (private route: ActivatedRoute, private titleService: Title) {
    titleService.setTitle("Project Details | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template");
  }
  projectId: any;

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.projectId = params['id'];
    // });

    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
      console.log('params',this.projectId)
      // if (params && params.hasOwnProperty('id')) {
      //   this.selectedProject = PROJECTLIST.filter(x => String(x.id) === params['id'])[0];
      // } else {
      //   this.selectedProject = PROJECTLIST[0];
      // }
    });

    // this._fetchData();
  }

  /**
   * fetch data
   */
  _fetchData(): void {
    this.projectActivities = PROJECTACTIVITIES;
  }

}
