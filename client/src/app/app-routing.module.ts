import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Users/pages/home/home.component';
import { MemberListComponent } from './members/pages/member-list/member-list.component';
import { MemberDetailComponent } from './members/pages/member-detail/member-detail.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ServerErrorComponent } from './shared/server-error/server-error.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {
        path:'members',
        component: MemberListComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'members/:username',
        component: MemberDetailComponent
      },
      {
        path:'lists',
        component:ListComponent
      },
      {
        path:'messages',
        component:MessagesComponent
      }
    ]
  }, 
  {
    path:'not-found',
    component:NotFoundComponent
  },
  {
    path:'server-error',
    component:ServerErrorComponent
  },
  {
    path:'errors',
    component:TestErrorsComponent
  }, 
  {
    path:'**',
    component:NotFoundComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
