import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {BvEComponent} from "./bv-e.component";
import {BvERoutingModule} from "./bv-e-routing.module";
import {Select2Module} from "ng-select2-component";
import { BvEInfoComponent } from './bv-e-info/bv-e-info.component';
import {ProfileModule} from "../../extra-pages/profile/profile.module";


@NgModule({
    declarations: [
        BvEComponent,
        BvEInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BvERoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        ProfileModule
    ]
})
export class BvEModule {
}
