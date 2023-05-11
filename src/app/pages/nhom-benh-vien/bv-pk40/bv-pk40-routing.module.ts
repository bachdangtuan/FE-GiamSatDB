import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvPk40InfoComponent} from "./bv-pk40-info/bv-pk40-info.component";
import {BvPk40Component} from "./bv-pk40.component";


const routes: Routes = [
    {path: '', component: BvPk40Component},
    {path: 'info', component: BvPk40InfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvPk40RoutingModule {
}
