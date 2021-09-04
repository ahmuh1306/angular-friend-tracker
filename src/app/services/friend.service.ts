import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Friend } from 'src/app/Friend';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private apiUrl = 'http://localhost:5000/friends'

  constructor(private http:HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.apiUrl);
  }

  deleteFriend(friend: Friend): Observable<Friend> {
    const url: string = `${this.apiUrl}/${friend.id}`;
    return this.http.delete<Friend>(url);
  }

  updateFriendFamily(friend: Friend): Observable<Friend> {
    const url: string = `${this.apiUrl}/${friend.id}`;
    return this.http.put<Friend>(url, friend, httpOptions)
  }

  addFriend(friend: Friend): Observable<Friend> {
    return this.http.post<Friend>(this.apiUrl, friend, httpOptions);
  }

}
