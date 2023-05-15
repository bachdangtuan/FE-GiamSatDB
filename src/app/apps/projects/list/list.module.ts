import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    ListComponent
  ],
    imports: [
        CommonModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        UiModule,
        ListRoutingModule,
        SharedModule
    ]
})
export class ListModule { }
