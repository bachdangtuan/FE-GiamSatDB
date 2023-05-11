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
import { BvYtccComponent } from './bv-ytcc/bv-ytcc.component';
import { BvVietmyComponent } from './bv-vietmy/bv-vietmy.component';
import { BvPstaComponent } from './bv-psta/bv-psta.component';
import { BvPhoiComponent } from './bv-phoi/bv-phoi.component';
import { BvQy110Component } from './bv-qy110/bv-qy110.component';
import { BvQy110InfoComponent } from './bv-qy110/bv-qy110-info/bv-qy110-info.component';
import { BvVietlifeComponent } from './bv-vietlife/bv-vietlife.component';
import { BvVietlifeInfoComponent } from './bv-vietlife/bv-vietlife-info/bv-vietlife-info.component';
import { BvMyrehabComponent } from './bv-myrehab/bv-myrehab.component';
import { BvMyrehabInfoComponent } from './bv-myrehab/bv-myrehab-info/bv-myrehab-info.component';
import { BvCtmComponent } from './bv-ctm/bv-ctm.component';
import { BvCtmInfoComponent } from './bv-ctm/bv-ctm-info/bv-ctm-info.component';
import { BvDongtamComponent } from './bv-dongtam/bv-dongtam.component';
import { BvDongtamInfoComponent } from './bv-dongtam/bv-dongtam-info/bv-dongtam-info.component';
import { BvThaihoaComponent } from './bv-thaihoa/bv-thaihoa.component';
import { BvThaihoaInfoComponent } from './bv-thaihoa/bv-thaihoa-info/bv-thaihoa-info.component';
import { BvVietnhatComponent } from './bv-vietnhat/bv-vietnhat.component';
import { BvVietnhatInfoComponent } from './bv-vietnhat/bv-vietnhat-info/bv-vietnhat-info.component';
import { BvUbkhComponent } from './bv-ubkh/bv-ubkh.component';
import { BvUbkhInfoComponent } from './bv-ubkh/bv-ubkh-info/bv-ubkh-info.component';
import {ProfileModule} from "../extra-pages/profile/profile.module";
import { BvNdtpComponent } from './bv-ndtp/bv-ndtp.component';
import { BvPk40Component } from './bv-pk40/bv-pk40.component';
import { BvPk40InfoComponent } from './bv-pk40/bv-pk40-info/bv-pk40-info.component';


@NgModule({
    declarations: [
    BvXanhfonComponent,
    BvBachmaiComponent,
    BvDrAllenComponent,
    BvTttmComponent,
    BvDtComponent,
    BvYtccComponent,
    BvVietmyComponent,
    BvPstaComponent,
    BvPhoiComponent,
    BvQy110Component,
    BvQy110InfoComponent,
    BvVietlifeComponent,
    BvVietlifeInfoComponent,
    BvMyrehabComponent,
    BvMyrehabInfoComponent,
    BvCtmComponent,
    BvCtmInfoComponent,
    BvDongtamComponent,
    BvDongtamInfoComponent,
    BvThaihoaComponent,
    BvThaihoaInfoComponent,
    BvVietnhatComponent,
    BvVietnhatInfoComponent,
    BvUbkhComponent,
    BvUbkhInfoComponent,
    BvNdtpComponent,
    BvPk40Component,
    BvPk40InfoComponent,

  ],
    imports: [
        CommonModule,
        NhomBenhVienRoutingModule,
        UiModule,
        AdvancedTableModule,
        Select2Module,
        PageTitleModule,
        ProfileModule
    ]
})
export class NhomBenhVienModule {
}
