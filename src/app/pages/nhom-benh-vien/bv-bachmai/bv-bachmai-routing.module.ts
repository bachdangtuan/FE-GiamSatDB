import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvBachmaiComponent} from "./bv-bachmai.component";


const routes: Routes = [{path: '', component: BvBachmaiComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvBachmaiRoutingModule {
}
