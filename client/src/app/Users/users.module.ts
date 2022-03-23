import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

//Components
import { HomeComponent } from './pages/home/home.component';
import { SignUpFormComponent } from './pages/sign-up-form/sign-up-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class UsersModule { }
