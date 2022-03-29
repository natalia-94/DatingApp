import { Component, OnInit } from '@angular/core';
import { Member } from '../members/interfaces/member';
import { MembersService } from '../members/services/members.service';
import { Pagination } from '../shared/interfaces/pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  members: Partial<Member[]>;
  predicate: string = 'liked';
  pageNumber = 1;
  pageSize = 5;
  pagination: Pagination;

  constructor(private memberService:MembersService) { }

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes(){
    this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe( response => {
      this.members = response.result;
      this.pagination = response.pagination;
    });
  }

  pageChanged(event:any){
    this.pageNumber = event.page;
    this.loadLikes();
  }

}
