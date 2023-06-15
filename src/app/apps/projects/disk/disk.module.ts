import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';

import {SharedModule} from "../../../shared/shared.module";
import {DiskComponent} from "./disk.component";
import {DiskRoutingModule} from "./disk-routing.module";



@NgModule({
  declarations: [
      DiskComponent
  ],
    imports: [
        CommonModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        UiModule,
        DiskRoutingModule,
        SharedModule
    ]
})
export class DiskModule { }
