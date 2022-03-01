import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  model: any = {};
  @Input() usersFromHomeComp: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    },error => {
      console.log(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
