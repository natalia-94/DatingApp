import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { FormsModule } from "@angular/forms";

//Components
import { HomeComponent } from './pages/home/home.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class UsersModule { }
