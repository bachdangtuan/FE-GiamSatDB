import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {BvMediplusComponent} from "./bv-mediplus.component";
import {BvMediplusRoutingModule} from "./bv-mediplus-routing.module";
import {Select2Module} from "ng-select2-component";
import { BvMediplusInfoComponent } from './bv-mediplus-info/bv-mediplus-info.component';
import {ProfileModule} from "../../extra-pages/profile/profile.module";


@NgModule({
    declarations: [
        BvMediplusComponent,
        BvMediplusInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BvMediplusRoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        ProfileModule
    ]
})
export class BvMediplusModule {
}
