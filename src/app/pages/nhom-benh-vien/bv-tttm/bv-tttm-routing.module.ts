import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvTttmComponent} from "./bv-tttm.component";
import {BvTttmInfoComponent} from "./bv-tttm-info/bv-tttm-info.component";


const routes: Routes = [
    {path: '', component: BvTttmComponent},
    {path: 'info', component: BvTttmInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvTttmRoutingModule {
}
