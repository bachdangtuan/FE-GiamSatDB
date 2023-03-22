import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvYtccComponent} from "./bv-ytcc.component";
// import {BvXanhfonComponent} from "./bv-xanhfon.component";


const routes: Routes = [{path: '', component: BvYtccComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvYtccRoutingModule {
}
