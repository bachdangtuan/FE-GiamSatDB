import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvMediplusComponent} from "./bv-mediplus.component";
import {BvMediplusInfoComponent} from "./bv-mediplus-info/bv-mediplus-info.component";



const routes: Routes = [
    {path: '', component: BvMediplusComponent},
    {path: 'info', component: BvMediplusInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvMediplusRoutingModule {
}
