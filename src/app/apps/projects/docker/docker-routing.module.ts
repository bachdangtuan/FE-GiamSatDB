import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DockerComponent} from "./docker.component";

const routes: Routes = [{ path: '', component: DockerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DockerRoutingModule { }
