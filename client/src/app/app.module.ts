import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

//Personalized modules
import { SharedModule } from "./shared/shared.module";
import { UsersModule } from "./Users/users.module";
import { MembersModule } from './members/members.module';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from "./shared/nav/nav.component";
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    MessagesComponent,
    TestErrorsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,    
    SharedModule,
    UsersModule,
    MembersModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor,multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
