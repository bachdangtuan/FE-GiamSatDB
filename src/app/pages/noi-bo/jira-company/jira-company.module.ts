import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JiraCompanyRoutingModule} from "./jira-company-routing.module";
import {JiraCompanyComponent} from "./jira-company.component";


@NgModule({
    declarations: [
        JiraCompanyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JiraCompanyRoutingModule
    ]
})
export class JiraCompanyModule {
}
