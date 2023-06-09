import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';



@NgModule({
  declarations: [
    LeftPanelComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [
    LeftPanelComponent
  ]
})
export class SharedModule { }
