import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvTttmComponent} from "./bv-tttm.component";


const routes: Routes = [{path: '', component: BvTttmComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvTttmRoutingModule {
}
