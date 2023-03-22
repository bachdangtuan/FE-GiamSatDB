import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDaihocYComponent} from "./bv-daihoc-y.component";


const routes: Routes = [{path: '', component: BvDaihocYComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDaihocYRoutingModule {
}
