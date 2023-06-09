import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvXanhfonRoutingModule} from "./bv-xanhfon-routing.module";
import { BvXanhphonInfoComponent } from './bv-xanhphon-info/bv-xanhphon-info.component';
import {ProfileModule} from "../../extra-pages/profile/profile.module";


@NgModule({
    declarations: [
    BvXanhphonInfoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        BvXanhfonRoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        ProfileModule
    ]
})
export class BvXanhfonModule {
}
