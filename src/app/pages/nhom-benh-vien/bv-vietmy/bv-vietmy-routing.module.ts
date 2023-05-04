import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvVietmyComponent} from "./bv-vietmy.component";
import {BvVietmyInfoComponent} from "./bv-vietmy-info/bv-vietmy-info.component";




const routes: Routes = [
    {path: '', component: BvVietmyComponent},
    {path: 'info', component: BvVietmyInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvVietmyRoutingModule {
}
