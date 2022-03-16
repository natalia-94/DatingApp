import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../Users/interfaces/Iuser';
import { Member } from '../../interfaces/member';
import { AccountService } from '../../../Users/services/account.service';
import { MembersService } from '../../services/members.service';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm; 
  @HostListener ('window:beforeunload',['$event']) unloadNotification($event: any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  user: User;
  member: Member;

  constructor( private accountService: AccountService, 
                private memberService:MembersService,
                private toastr: ToastrService) { 
    this.accountService.currentUserSource$.pipe(take(1)).subscribe(user => 
        this.user = user
      );
  }

  ngOnInit(): void {
    this.memberService.getMember(this.user.username).subscribe( 
      member => this.member = member
      );
  }

  updateMember(){
    this.memberService.updateMember(this.member).subscribe( () => {
      this.toastr.success("Profile updated successfully!");
      this.editForm.reset(this.member);
    });
  }

}
