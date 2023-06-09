import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JiraConfluenceRoutingModule} from "./jira-confluence-routing.module";
import {JiraConfluenceComponent} from "./jira-confluence.component";
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";


@NgModule({
    declarations: [
        JiraConfluenceComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JiraConfluenceRoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule
    ]
})
export class JiraConfluenceModule {
}
