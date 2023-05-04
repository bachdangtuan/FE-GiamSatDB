import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvCtmComponent} from "./bv-ctm.component";
import {BvCtmInfoComponent} from "./bv-ctm-info/bv-ctm-info.component";


const routes: Routes = [
    {path: '', component: BvCtmComponent},
    {path: 'info', component: BvCtmInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvCtmRoutingModule {
}
