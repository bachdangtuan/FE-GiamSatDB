import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'bv-e',
        loadChildren: () => import('./bv-e/bv-e.module').then(m => m.BvEModule)
    },
    {
        path: 'bv-mediplus',
        loadChildren: () => import('./bv-mediplus/bv-mediplus.module').then(m => m.BvMediplusModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhomBenhVienRoutingModule {
}
