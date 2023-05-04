import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvQy110Component} from "./bv-qy110.component";
import {BvQy110InfoComponent} from "./bv-qy110-info/bv-qy110-info.component";


const routes: Routes = [
    {path: '', component: BvQy110Component},
    {path: 'info', component: BvQy110InfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvQy110RoutingModule {
}
