import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvVietnhatInfoComponent} from "./bv-vietnhat-info/bv-vietnhat-info.component";
import {BvVietnhatComponent} from "./bv-vietnhat.component";


const routes: Routes = [
    {path: '', component: BvVietnhatComponent},
    {path: 'info', component: BvVietnhatInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvVietnhatRoutingModule {
}
