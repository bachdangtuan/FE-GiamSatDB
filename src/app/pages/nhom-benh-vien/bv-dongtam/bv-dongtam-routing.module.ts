import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDongtamComponent} from "./bv-dongtam.component";
import {BvDongtamInfoComponent} from "./bv-dongtam-info/bv-dongtam-info.component";


const routes: Routes = [
    {path: '', component: BvDongtamComponent},
    {path: 'info', component: BvDongtamInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDongtamRoutingModule {
}
