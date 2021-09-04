import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddFriend: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddFriend(): void {
    this.showAddFriend = !this.showAddFriend;
    this.subject.next(this.showAddFriend)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
