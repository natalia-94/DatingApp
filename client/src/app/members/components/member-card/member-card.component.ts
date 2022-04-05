import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../interfaces/member';
import { MembersService } from '../../services/members.service';
import { ToastrService } from 'ngx-toastr';
import { PresenceService } from '../../../Users/services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
@Input() member: Member;

  constructor(private membersService: MembersService, 
              private toastr: ToastrService,
              public presence: PresenceService) { }

  ngOnInit(): void {
  }

  addLike(member: Member){
    this.membersService.addLike(member.username).subscribe(()=> {
      this.toastr.success('You have liked '+  member.knownAs);
    });
  }

}
