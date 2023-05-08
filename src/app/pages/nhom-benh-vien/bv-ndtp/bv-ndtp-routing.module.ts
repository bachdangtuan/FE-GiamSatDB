import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvNdtpComponent} from "./bv-ndtp.component";
import {BvNdtpInfoComponent} from "./bv-ndtp-info/bv-ndtp-info.component";


const routes: Routes = [
    {path: '', component: BvNdtpComponent},
    {path: 'info', component: BvNdtpInfoComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvNdtpRoutingModule {
}
