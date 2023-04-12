import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDaihocYComponent} from "./bv-daihoc-y.component";
import {BvDaihocYInfoComponent} from "./bv-daihoc-y-info/bv-daihoc-y-info.component";



const routes: Routes = [
    {path: '', component: BvDaihocYComponent},
    {path: 'info', component: BvDaihocYInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDaihocYRoutingModule {
}
