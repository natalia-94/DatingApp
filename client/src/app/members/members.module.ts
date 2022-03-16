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



@NgModule({
  declarations: [
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent,
    MemberEditComponent
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
