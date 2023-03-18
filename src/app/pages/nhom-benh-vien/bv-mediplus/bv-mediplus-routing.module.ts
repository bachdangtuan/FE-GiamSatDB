import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvMediplusComponent} from "./bv-mediplus.component";


const routes: Routes = [{path: '', component: BvMediplusComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvMediplusRoutingModule {
}
