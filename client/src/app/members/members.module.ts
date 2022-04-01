import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

//Modules
import { SharedModule } from '../shared/shared.module';

import { MemberDetailComponent } from './pages/member-detail/member-detail.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { MemberListComponent } from './pages/member-list/member-list.component';
import { MemberEditComponent } from './pages/member-edit/member-edit.component';
import { PhotoEditorComponent } from './photos/components/photo-editor/photo-editor.component';
import { MemberMessagesComponent } from './components/member-messages/member-messages.component';



@NgModule({
  declarations: [
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    MemberMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent
  ]
})
export class MembersModule { }
