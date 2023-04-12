import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDrAllenComponent} from "./bv-dr-allen.component";
import {BvDrAllenInfoComponent} from "./bv-dr-allen-info/bv-dr-allen-info.component";



const routes: Routes = [
    {path: '', component: BvDrAllenComponent},
    {path: 'info', component: BvDrAllenInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDrAllenRoutingModule {
}
