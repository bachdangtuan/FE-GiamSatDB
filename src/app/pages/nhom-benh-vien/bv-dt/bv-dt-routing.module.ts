import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDtComponent} from "./bv-dt.component";




const routes: Routes = [{path: '', component: BvDtComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDtRoutingModule {
}
