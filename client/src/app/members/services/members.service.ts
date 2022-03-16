import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../interfaces/member';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[] =[];
baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]>{
    if(this.members.length > 0 ) return of(this.members);
    return this.http.get<Member[]>(`${this.baseUrl}users`).pipe(
      map( members => {
        this.members = members;
        return members;
      }));
  }
  getMember(username: string): Observable<Member>{
    const member = this.members.find(x => x.username === username);
    if(member !== undefined) return of(member);
    return this.http.get<Member>(`${this.baseUrl}users/${username}`)
  }


  updateMember(member: Member){
    return this.http.put(`${ this.baseUrl }users`, member).pipe(
      map( () =>{
        const index = this.members.indexOf(member);
        this.getMembers[index] = member;
      })
    );
  }
}
