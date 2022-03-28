import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Modules
//import { FormsModule } from "@angular/forms";

// import { NavComponent } from '../shared/nav/nav.component';

//ngx bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from "ngx-spinner";
import { FileUploadModule } from "ng2-file-upload";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from 'ngx-timeago';

//components
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './forms/text-input/text-input.component';
import { DateInputComponent } from './forms/date-input/date-input.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ServerErrorComponent,
    TextInputComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TimeagoModule.forRoot(),
    NgxGalleryModule,
    NgxSpinnerModule,
    FileUploadModule,
    ReactiveFormsModule
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    BsDatepickerModule,
    TabsModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    FileUploadModule,
    ReactiveFormsModule,
    TextInputComponent,
    DateInputComponent,
    PaginationModule,
    ButtonsModule,
    TimeagoModule
    //NavComponent
  ]
})
export class SharedModule { }
