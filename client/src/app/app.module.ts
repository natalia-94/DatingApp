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
import { MessagesComponent } from './messages/components/messages.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    MessagesComponent,
    TestErrorsComponent,
    AdminPanelComponent,
    HasRoleDirective,
    UserManagementComponent,
    PhotoManagementComponent,
    RolesModalComponent,
    ConfirmDialogComponent    
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
    {provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
