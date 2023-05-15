import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedTableDeviceComponent } from './advanced-table-device/advanced-table-device.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        AdvancedTableDeviceComponent
    ],
    exports: [
        AdvancedTableDeviceComponent
    ],
    imports: [
        CommonModule,
        NgbPaginationModule
    ]
})
export class SharedModule { }
