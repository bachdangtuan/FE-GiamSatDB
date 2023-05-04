import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvMyrehabComponent} from "./bv-myrehab.component";
import {BvMyrehabInfoComponent} from "./bv-myrehab-info/bv-myrehab-info.component";


const routes: Routes = [
    {path: '', component: BvMyrehabComponent},
    {path: 'info', component: BvMyrehabInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvMyrehabRoutingModule {
}
