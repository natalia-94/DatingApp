import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../Users/services/account.service';
import { User } from '../../Users/interfaces/Iuser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUserSource$;
  }

  login(){
     this.accountService.login(this.model).subscribe(response => {
       console.log(response);
     }, error => {
       console.log(error);
     });
  }

  logout(){
    this.accountService.logout();
  } 
}
