import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Select2Module} from "ng-select2-component";
import {BvDkthProdRoutingModule} from "./bv-dkth-prod-routing.module";


@NgModule({
    declarations: [],
    imports: [
        BvDkthProdRoutingModule,
        CommonModule,
        FormsModule,
        Select2Module
    ]
})
export class BvDkthProdModule {
}
