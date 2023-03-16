import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IsofhSystemsComponent} from "./isofh-systems.component";
import {IsofhSystemsRoutingModule} from "./isofh-systems-routing.module";


@NgModule({
    declarations: [
        IsofhSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IsofhSystemsRoutingModule
    ]
})
export class IsofhSystemsModule {
}
