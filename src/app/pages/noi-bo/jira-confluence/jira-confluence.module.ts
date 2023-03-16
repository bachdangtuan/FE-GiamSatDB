import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JiraConfluenceRoutingModule} from "./jira-confluence-routing.module";
import {JiraConfluenceComponent} from "./jira-confluence.component";


@NgModule({
    declarations: [
        JiraConfluenceComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JiraConfluenceRoutingModule
    ]
})
export class JiraConfluenceModule {
}
