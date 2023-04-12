import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDtComponent} from "./bv-dt.component";
import {BvDtInfoComponent} from "./bv-dt-info/bv-dt-info.component";




const routes: Routes = [
    {path: '', component: BvDtComponent},
    {path: 'info', component: BvDtInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDtRoutingModule {
}
