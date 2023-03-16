import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsofhSystemsComponent} from "./isofh-systems.component";


const routes: Routes = [{path: '', component: IsofhSystemsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IsofhSystemsRoutingModule {
}
