import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'bv-daihoc-y',
        loadChildren: () => import('./bv-daihoc-y/bv-daihoc-y.module').then(m => m.BvDaihocYModule)
    },
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
    {
        path: 'bv-ytcc',
        loadChildren: () => import('./bv-ytcc/bv-ytcc.module').then(m => m.BvYtccModule)
    },
    {
        path: 'bv-dkth',
        loadChildren: () => import('./bv-dakhoa-thanh-hoa/bv-dakhoa-thanh-hoa.module').then(m => m.BvDakhoaThanhHoaModule)
    },
    {
        path: 'bv-vietmy',
        loadChildren: () => import('./bv-vietmy/bv-vietmy.module').then(m => m.BvVietmyModule)
    },
    {
        path: 'bv-psta',
        loadChildren: () => import('./bv-psta/bv-psta.module').then(m => m.BvPstaModule)
    },
    {
        path: 'bv-phoi',
        loadChildren: () => import('./bv-phoi/bv-phoi.module').then(m => m.BvPhoiModule)
    },
    {
        path: 'bv-qy110',
        loadChildren: () => import('./bv-qy110/bv-qy110.module').then(m => m.BvQy110Module)
    },
    {
        path: 'bv-vietlife',
        loadChildren: () => import('./bv-vietlife/bv-vietlife.module').then(m => m.BvVietlifeModule)
    },
    {
        path: 'bv-myrehab',
        loadChildren: () => import('./bv-myrehab/bv-myrehab.module').then(m => m.BvMyrehabModule)
    },
    {
        path: 'bv-ctm',
        loadChildren: () => import('./bv-ctm/bv-ctm.module').then(m => m.BvCtmModule)
    },
    {
        path: 'bv-dongtam',
        loadChildren: () => import('./bv-dongtam/bv-dongtam.module').then(m => m.BvDongtamModule)
    },
    {
        path: 'bv-thaihoa',
        loadChildren: () => import('./bv-thaihoa/bv-thaihoa.module').then(m => m.BvThaihoaModule)
    },
    {
        path: 'bv-vietnhat',
        loadChildren: () => import('./bv-vietnhat/bv-vietnhat.module').then(m => m.BvVietnhatModule)
    },
    {
        path: 'bv-ubkh',
        loadChildren: () => import('./bv-ubkh/bv-ubkh.module').then(m => m.BvUbkhModule)
    },
    {
        path: 'bv-ndtp',
        loadChildren: () => import('./bv-ndtp/bv-ndtp.module').then(m => m.BvNdtpModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhomBenhVienRoutingModule {
}
