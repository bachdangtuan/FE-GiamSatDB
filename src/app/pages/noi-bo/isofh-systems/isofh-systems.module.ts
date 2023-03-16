import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JiraCompanyRoutingModule} from "../jira-company/jira-company-routing.module";
import {IsofhSystemsComponent} from "./isofh-systems.component";


@NgModule({
    declarations: [
        IsofhSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JiraCompanyRoutingModule
    ]
})
export class IsofhSystemsModule {
}
