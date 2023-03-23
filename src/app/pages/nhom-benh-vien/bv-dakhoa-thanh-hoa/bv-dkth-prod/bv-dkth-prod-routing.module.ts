import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDkthProdComponent} from "./bv-dkth-prod.component";


const routes: Routes = [{path: '', component: BvDkthProdComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDkthProdRoutingModule {
}
