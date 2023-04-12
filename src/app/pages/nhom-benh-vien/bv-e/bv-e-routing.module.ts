import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvEComponent} from "./bv-e.component";
import {BvEInfoComponent} from "./bv-e-info/bv-e-info.component";


const routes: Routes = [
    {path: '', component: BvEComponent},
    {path: 'info', component: BvEInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvERoutingModule {
}
