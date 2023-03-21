import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDrAllenComponent} from "./bv-dr-allen.component";



const routes: Routes = [{path: '', component: BvDrAllenComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDrAllenRoutingModule {
}
