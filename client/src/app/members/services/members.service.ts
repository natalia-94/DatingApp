import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../interfaces/member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMember(username: string): Observable<Member>{
    return this.http.get<Member>(`${this.baseUrl}users/${username}`)
  }

  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(`${this.baseUrl}users`);
  }
}
