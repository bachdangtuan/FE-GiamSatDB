import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvPhoiInfoComponent} from "./bv-phoi-info/bv-phoi-info.component";
import {BvPhoiComponent} from "./bv-phoi.component";




const routes: Routes = [
    {path: '', component: BvPhoiComponent},
    {path: 'info', component: BvPhoiInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvPhoiRoutingModule {
}
