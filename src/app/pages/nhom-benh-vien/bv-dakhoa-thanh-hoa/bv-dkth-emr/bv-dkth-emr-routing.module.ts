import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDkthEmrComponent} from "./bv-dkth-emr.component";


const routes: Routes = [{path: '', component: BvDkthEmrComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDkthEmrRoutingModule {
}
