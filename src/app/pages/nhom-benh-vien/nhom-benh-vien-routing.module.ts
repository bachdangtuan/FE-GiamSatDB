import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BvXanhfonModule} from "./bv-xanhfon/bv-xanhfon.module";

const routes: Routes = [
    {
        path: 'bv-e',
        loadChildren: () => import('./bv-e/bv-e.module').then(m => m.BvEModule)
    },
    {
        path: 'bv-mediplus',
        loadChildren: () => import('./bv-mediplus/bv-mediplus.module').then(m => m.BvMediplusModule)
    },
    {
        path: 'bv-xanhfon',
        loadChildren: () => import('./bv-xanhfon/bv-xanhfon.module').then(m => m.BvXanhfonModule)
    },
    {
        path: 'bv-bachmai',
        loadChildren: () => import('./bv-bachmai/bv-bachmai.module').then(m => m.BvBachmaiModule)
    },
    {
        path: 'bv-allen',
        loadChildren: () => import('./bv-dr-allen/bv-allen.module').then(m => m.BvDrAllenModule)
    },
    {
        path: 'bv-tttm',
        loadChildren: () => import('./bv-tttm/bv-tttm.module').then(m => m.BvTttmModule)
    },
    {
        path: 'bv-dt',
        loadChildren: () => import('./bv-dt/bv-dt.module').then(m => m.BvDtModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhomBenhVienRoutingModule {
}
