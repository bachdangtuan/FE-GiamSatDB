import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NhomBenhVienRoutingModule} from './nhom-benh-vien-routing.module';
import { BvXanhfonComponent } from './bv-xanhfon/bv-xanhfon.component';
import {UiModule} from "../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {PageTitleModule} from "../../shared/page-title/page-title.module";
import { BvBachmaiComponent } from './bv-bachmai/bv-bachmai.component';
import { BvDrAllenComponent } from './bv-dr-allen/bv-dr-allen.component';
import { BvTttmComponent } from './bv-tttm/bv-tttm.component';
import { BvDtComponent } from './bv-dt/bv-dt.component';


@NgModule({
    declarations: [
    BvXanhfonComponent,
    BvBachmaiComponent,
    BvDrAllenComponent,
    BvTttmComponent,
    BvDtComponent,

  ],
    imports: [
        CommonModule,
        NhomBenhVienRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        PageTitleModule
    ]
})
export class NhomBenhVienModule {
}
