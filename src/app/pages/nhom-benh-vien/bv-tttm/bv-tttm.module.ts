import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvTttmRoutingModule} from "./bv-tttm-routing.module";
import { BvTttmInfoComponent } from './bv-tttm-info/bv-tttm-info.component';
import {ProfileModule} from "../../extra-pages/profile/profile.module";


@NgModule({
    declarations: [
    BvTttmInfoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        BvTttmRoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        ProfileModule
    ]
})
export class BvTttmModule {
}
