import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';

import {SharedModule} from "../../../shared/shared.module";
import {DockerComponent} from "./docker.component";
import {DockerRoutingModule} from "./docker-routing.module";



@NgModule({
  declarations: [
      DockerComponent
  ],
    imports: [
        CommonModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        UiModule,
        DockerRoutingModule,
        SharedModule
    ]
})
export class DockerModule { }
