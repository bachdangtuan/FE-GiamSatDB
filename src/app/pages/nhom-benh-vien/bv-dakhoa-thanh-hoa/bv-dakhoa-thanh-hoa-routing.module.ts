import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvDakhoaThanhHoaComponent} from "./bv-dakhoa-thanh-hoa.component";
import {BvDkthEmrModule} from "./bv-dkth-emr/bv-dkth-emr.module";


const routes: Routes =
    [
        {
            path: 'db-prod',
            loadChildren: () => import('./bv-dkth-prod/bv-dkth-prod.module').then(m => m.BvDkthProdModule)
        },
        {
            path: 'db-emr',
            loadChildren: () => import('./bv-dkth-emr/bv-dkth-emr.module').then(m => m.BvDkthEmrModule)
        },
        // {
        //     path: '',
        //     redirectTo: 'db-prod',
        //     pathMatch: 'full'
        // }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BvDakhoaThanhHoaRoutingModule {
}
