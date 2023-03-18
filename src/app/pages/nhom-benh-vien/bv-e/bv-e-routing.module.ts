import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvEComponent} from "./bv-e.component";


const routes: Routes = [{path: '', component: BvEComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvERoutingModule {
}
