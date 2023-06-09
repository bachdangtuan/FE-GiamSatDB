import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JiraCompanyComponent} from "./jira-company.component";


const routes: Routes = [{path: '', component: JiraCompanyComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JiraCompanyRoutingModule {
}
