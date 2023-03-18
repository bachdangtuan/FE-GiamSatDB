import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {BvMediplusComponent} from "./bv-mediplus.component";
import {BvMediplusRoutingModule} from "./bv-mediplus-routing.module";
import {Select2Module} from "ng-select2-component";


@NgModule({
    declarations: [
        BvMediplusComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BvMediplusRoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule,
        Select2Module
    ]
})
export class BvMediplusModule {
}
