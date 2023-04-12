import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvBachmaiRoutingModule} from "./bv-bachmai-routing.module";
import { BvBachmaiInfoComponent } from './bv-bachmai-info/bv-bachmai-info.component';


@NgModule({
    declarations: [
    BvBachmaiInfoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        PageTitleModule,
        BvBachmaiRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module
    ]
})
export class BvBachmaiModule {
}
