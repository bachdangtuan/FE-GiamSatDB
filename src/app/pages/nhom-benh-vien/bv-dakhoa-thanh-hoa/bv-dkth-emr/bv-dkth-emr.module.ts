import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Select2Module} from "ng-select2-component";
import {BvDkthEmrRoutingModule} from "./bv-dkth-emr-routing.module";


@NgModule({
    declarations: [],
    imports: [
        BvDkthEmrRoutingModule,
        CommonModule,
        FormsModule,
        Select2Module
    ]
})
export class BvDkthEmrModule {
}
