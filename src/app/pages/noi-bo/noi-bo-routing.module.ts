import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'systems-team',
        loadChildren: () => import('./isofh-systems/isofh-systems.module').then(m => m.IsofhSystemsModule)
    },
    {
        path: 'jira-company',
        loadChildren: () => import('./jira-company/jira-company.module').then(m => m.JiraCompanyModule)
    },
    {
        path: 'jira-confluence',
        loadChildren: () => import('./jira-confluence/jira-confluence.module').then(m => m.JiraConfluenceModule)
    },
    {
        path: '',
        redirectTo: 'systems-team',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoiBoRoutingModule {
}
