import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvBachmaiComponent} from "./bv-bachmai.component";
import {BvBachmaiInfoComponent} from "./bv-bachmai-info/bv-bachmai-info.component";


const routes: Routes = [
    {path: '', component: BvBachmaiComponent},
    {path: 'info', component: BvBachmaiInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvBachmaiRoutingModule {
}
