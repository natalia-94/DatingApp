import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../Users/services/account.service';
import { take } from 'rxjs/operators';
import { User } from '../Users/interfaces/Iuser';

@Directive({
  selector: '[appHasRole]' //*appHasRole
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  user: User;

  constructor(private viewContainerRef: ViewContainerRef, 
              private templateRef: TemplateRef<any>, 
              private accountService: AccountService) {
                this.accountService.currentUserSource$.pipe(take(1)).subscribe( user => {
                  this.user = user;
                })
               }
  ngOnInit(): void {
    //Clear view if no roles or not user
    if(!this.user?.roles || this.user == null){
      this.viewContainerRef.clear();
      return;
    }

    if(this.user?.roles.some(r => this.appHasRole.includes(r))){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

}
