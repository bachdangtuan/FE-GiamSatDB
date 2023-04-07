import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IsofhSystemsComponent} from "./isofh-systems.component";
import {IsofhSystemsRoutingModule} from "./isofh-systems-routing.module";
import {ProfileModule} from "../../extra-pages/profile/profile.module";


@NgModule({
    declarations: [
        IsofhSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IsofhSystemsRoutingModule,
        ProfileModule
    ]
})
export class IsofhSystemsModule {
}
