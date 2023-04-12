import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvYtccComponent} from "./bv-ytcc.component";
import {BvYtccInfoComponent} from "./bv-ytcc-info/bv-ytcc-info.component";


const routes: Routes = [
    {path: '', component: BvYtccComponent},
    {path: 'info', component: BvYtccInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvYtccRoutingModule {
}
