import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JiraConfluenceComponent} from './jira-confluence.component';

const routes: Routes = [{path: '', component: JiraConfluenceComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JiraConfluenceRoutingModule {
}
