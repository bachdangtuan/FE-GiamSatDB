import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvXanhfonComponent} from "./bv-xanhfon.component";
import {BvXanhphonInfoComponent} from "./bv-xanhphon-info/bv-xanhphon-info.component";



const routes: Routes = [
    {path: '', component: BvXanhfonComponent},
    {path: 'info', component: BvXanhphonInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvXanhfonRoutingModule {
}
