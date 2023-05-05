import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {NoiBoComponent} from './noi-bo/noi-bo.component';
import { NhomBenhVienComponent } from './nhom-benh-vien/nhom-benh-vien.component';
import { BvDakhoaThanhHoaComponent } from './nhom-benh-vien/bv-dakhoa-thanh-hoa/bv-dakhoa-thanh-hoa.component';
import { BvDaihocYComponent } from './nhom-benh-vien/bv-daihoc-y/bv-daihoc-y.component';
import {UiModule} from "../shared/ui/ui.module";
import {AdvancedTableModule} from "../shared/advanced-table/advanced-table.module";
import {Select2Module} from "ng-select2-component";
import {PageTitleModule} from "../shared/page-title/page-title.module";


@NgModule({
    declarations: [
        NoiBoComponent,
        NhomBenhVienComponent,
        BvDakhoaThanhHoaComponent,
        BvDaihocYComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        PageTitleModule
    ]
})
export class PagesModule {
}
