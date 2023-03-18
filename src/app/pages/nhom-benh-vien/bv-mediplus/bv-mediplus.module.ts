import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {BvMediplusComponent} from "./bv-mediplus.component";
import {BvMediplusRoutingModule} from "./bv-mediplus-routing.module";


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
        AdvancedTableModule
    ]
})
export class BvMediplusModule {
}
