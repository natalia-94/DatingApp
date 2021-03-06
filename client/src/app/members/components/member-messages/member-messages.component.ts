import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Message } from '../../../messages/models/message';
import { User } from '../../../Users/interfaces/Iuser';
import { AccountService } from '../../../Users/services/account.service';
import { take } from 'rxjs/operators';
import { MessageService } from '../../../messages/services/message.service';
import { NgForm } from '@angular/forms';

@Component({
  changeDetection:ChangeDetectionStrategy.OnPush,
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
  loading = false;

  constructor(private accountService: AccountService, public messageService: MessageService) { 
      this.accountService.currentUserSource$.pipe(take(1)).subscribe(user => 
      this.user = user
    );    
  }

  ngOnInit(): void {
  }

  sendMessage(){
    this.loading = true;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm.reset();      
    })
    .finally(() => this.loading = false);
  }

 

}
