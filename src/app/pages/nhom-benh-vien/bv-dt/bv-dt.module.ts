import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvDtRoutingModule} from "./bv-dt-routing.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        PageTitleModule,
        BvDtRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module
    ]
})
export class BvDtModule {
}
