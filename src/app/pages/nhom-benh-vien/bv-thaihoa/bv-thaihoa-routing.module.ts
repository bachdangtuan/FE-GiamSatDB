import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvThaihoaComponent} from "./bv-thaihoa.component";
import {BvThaihoaInfoComponent} from "./bv-thaihoa-info/bv-thaihoa-info.component";


const routes: Routes = [
    {path: '', component: BvThaihoaComponent},
    {path: 'info', component: BvThaihoaInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvThaihoaRoutingModule {
}
