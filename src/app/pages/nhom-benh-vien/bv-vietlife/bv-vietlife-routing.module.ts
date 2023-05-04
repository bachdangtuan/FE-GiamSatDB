import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvVietlifeComponent} from "./bv-vietlife.component";
import {BvVietlifeInfoComponent} from "./bv-vietlife-info/bv-vietlife-info.component";


const routes: Routes = [
    {path: '', component: BvVietlifeComponent},
    {path: 'info', component: BvVietlifeInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvVietlifeRoutingModule {
}
