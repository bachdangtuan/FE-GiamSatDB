import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NoiBoComponent } from './noi-bo/noi-bo.component';
import { BenhVienComponent } from './benh-vien/benh-vien.component';


@NgModule({
  declarations: [
  
    NoiBoComponent,
       BenhVienComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
