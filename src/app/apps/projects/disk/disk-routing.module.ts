import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiskComponent} from "./disk.component";

const routes: Routes = [{ path: '', component: DiskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiskRoutingModule { }
