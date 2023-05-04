import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvPstaComponent} from "./bv-psta.component";
import {BvPstaInfoComponent} from "./bv-psta-info/bv-psta-info.component";




const routes: Routes = [
    {path: '', component: BvPstaComponent},
    {path: 'info', component: BvPstaInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvPstaRoutingModule {
}
