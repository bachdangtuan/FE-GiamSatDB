import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageTitleModule} from "../../../shared/page-title/page-title.module";
import {UiModule} from "../../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {BvVietmyRoutingModule} from "./bv-vietmy-routing.module";
import {ProfileModule} from "../../extra-pages/profile/profile.module";
import { BvVietmyInfoComponent } from './bv-vietmy-info/bv-vietmy-info.component';


@NgModule({
    declarations: [
    BvVietmyInfoComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        BvVietmyRoutingModule,
        PageTitleModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        ProfileModule
    ]
})
export class BvVietmyModule {
}
