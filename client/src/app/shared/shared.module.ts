import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Modules
import { FormsModule } from "@angular/forms";

// import { NavComponent } from '../shared/nav/nav.component';

//ngx bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

//components
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';



@NgModule({
  declarations: [
    //NavComponent  
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  exports: [
    FormsModule,
    BsDropdownModule,
    ToastrModule
    //NavComponent
  ]
})
export class SharedModule { }
