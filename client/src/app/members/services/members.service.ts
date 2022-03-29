import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../interfaces/member';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PaginatedResult } from '../../shared/interfaces/pagination';
import { UserParams } from '../../Users/models/userParams';
import { AccountService } from '../../Users/services/account.service';
import { User } from '../../Users/interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[] =[];
  baseUrl = environment.apiUrl;
  memberCache = new Map(); 
  user: User;
  userParams: UserParams;


  constructor(private http: HttpClient, private accountService: AccountService) { 
    this.accountService.currentUserSource$.pipe(take(1)).subscribe(user=>{
      this.user = user;
      this.userParams = new UserParams(user);
    });
  }

  getUserParams(){
    return this.userParams;
  }

  setUserParams(params: UserParams){
    this.userParams = params;
  }

  resetUserParams(){
    this.userParams = new UserParams(this.user);
    return this.userParams;
  }

  addLike(username:string){
    return this.http.post(`${this.baseUrl}likes/${username}`,{});
  }

  getLikes(predicate: string, pageNumber, pageSize){
    let params = this.getPaginationHeaders(pageNumber,pageSize);
    params = params.append('predicate', predicate);

    return this.getPaginatedResults<Partial<Member[]>>(`${this.baseUrl}likes?predicate=${predicate}`,params); //this.http.get<Partial<Member[]>>()
  }

  getMembers(userParams: UserParams){
    // if(this.members.length > 0 ) return of(this.members);
    var response  = this.memberCache.get(Object.values(userParams).join('-'));
    if(response){
      return of(response);
    }

    let params = this.getPaginationHeaders(userParams.pageNumber,userParams.pageSize);

    params = params.append('minAge',userParams.minAge.toString());
    params = params.append('maxAge',userParams.maxAge.toString());
    params = params.append('gender',userParams.gender);
    params = params.append('orderBy',userParams.orderBy);

    return this.getPaginatedResults<Member[]>(`${this.baseUrl}users`,params)
    .pipe(map(response => {
      this.memberCache.set(Object.values(userParams).join('-'),response)
      return response;
    }));
  }
  
  getMember(username: string): Observable<Member>{
    let member = [...this.memberCache.values()]
    .reduce((arr,elem) => arr.concat(elem.result),[])
    .find((member:Member) => member.username === username);

    if(member){
      return of(member);
    }
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

  setMainPhoto(photoId: number){
    return this.http.put(`${this.baseUrl}users/set-main-photo/${photoId}`,{});
  }
  
  deletePhoto(photoId: number){
    return this.http.delete(`${this.baseUrl}users/delete-photo/${photoId}`,{});
  }

  private getPaginatedResults<T>(url: string,params: HttpParams) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();

    return this.http.get<T>(url, { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }

  private getPaginationHeaders(pageNumber: number, pageSize: number){
    let params = new HttpParams();

    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }
}
