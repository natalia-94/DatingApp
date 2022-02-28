import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { FormsModule } from "@angular/forms";

import { NavComponent } from '../shared/nav/nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
