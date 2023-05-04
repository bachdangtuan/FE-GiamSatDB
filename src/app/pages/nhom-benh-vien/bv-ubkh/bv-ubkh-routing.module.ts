import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvUbkhComponent} from "./bv-ubkh.component";
import {BvUbkhInfoComponent} from "./bv-ubkh-info/bv-ubkh-info.component";


const routes: Routes = [
    {path: '', component: BvUbkhComponent},
    {path: 'info', component: BvUbkhInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvUbkhRoutingModule {
}
