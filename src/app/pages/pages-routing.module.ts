import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoiBoModule} from "./noi-bo/noi-bo.module";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'noi-bo',
        pathMatch: 'full'
    },
    {
        path: 'noi-bo',
        loadChildren: () => import('./noi-bo/noi-bo.module').then(m => m.NoiBoModule)
    },

    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'dashboard',
    //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    // },
    // {
    //     path: 'widgets',
    //     loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
    // },
    {path: 'pages', loadChildren: () => import('./extra-pages/extra-pages.module').then(m => m.ExtraPagesModule)},
    {path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)},
    {path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)},
    {path: 'ui-element', loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule)},
    {path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)},
    {path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
