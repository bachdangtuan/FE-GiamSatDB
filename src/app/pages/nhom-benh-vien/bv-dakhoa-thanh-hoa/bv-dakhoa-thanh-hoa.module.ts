import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvDakhoaThanhHoaRoutingModule} from "./bv-dakhoa-thanh-hoa-routing.module";
import { BvDkthEmrComponent } from './bv-dkth-emr/bv-dkth-emr.component';
import { BvDkthProdComponent } from './bv-dkth-prod/bv-dkth-prod.component';
import { BvDkthInfoComponent } from './bv-dkth-info/bv-dkth-info.component';


@NgModule({
    declarations: [
    BvDkthEmrComponent,
    BvDkthProdComponent,
    BvDkthInfoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        PageTitleModule,
        BvDakhoaThanhHoaRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module
    ]
})
export class BvDakhoaThanhHoaModule {
}
