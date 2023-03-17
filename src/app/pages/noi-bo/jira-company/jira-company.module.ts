import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JiraCompanyRoutingModule} from "./jira-company-routing.module";
import {JiraCompanyComponent} from "./jira-company.component";
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {UiModule} from "../../../shared/ui/ui.module";


@NgModule({
    declarations: [
        JiraCompanyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JiraCompanyRoutingModule,
        PageTitleModule,
        AdvancedTableModule,
        UiModule
    ]
})
export class JiraCompanyModule {
}
