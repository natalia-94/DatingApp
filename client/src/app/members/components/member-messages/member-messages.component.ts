import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Message } from '../../../messages/models/message';
import { User } from '../../../Users/interfaces/Iuser';
import { AccountService } from '../../../Users/services/account.service';
import { take } from 'rxjs/operators';
import { MessageService } from '../../../messages/services/message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[] = [];
  @Input() username: string;
  messageContent: string;
  user: User;

  constructor(private accountService: AccountService, public messageService: MessageService) { 
      this.accountService.currentUserSource$.pipe(take(1)).subscribe(user => 
      this.user = user
    );    
  }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm.reset();
    });
  }

 

}
