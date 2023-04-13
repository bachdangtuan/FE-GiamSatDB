import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvDrAllenRoutingModule} from "./bv-allen-routing.module";
import { BvDrAllenInfoComponent } from './bv-dr-allen-info/bv-dr-allen-info.component';
import {ProfileModule} from "../../extra-pages/profile/profile.module";


@NgModule({
    declarations: [
    BvDrAllenInfoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        PageTitleModule,
        BvDrAllenRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        ProfileModule
    ]
})
export class BvDrAllenModule {
}
