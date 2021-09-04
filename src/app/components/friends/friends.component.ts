import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/services/friend.service';
import { Friend } from 'src/app/Friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = []

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getFriends().subscribe((friends) => this.friends = friends);
  }

  deleteFriend(friend: Friend) {
    this.friendService.deleteFriend(friend).subscribe(() => (this.friends = this.friends.filter((f) => f.id !== friend.id)));
  }

  toggleFamily(friend: Friend) {
    friend.family = !friend.family;
    this.friendService.updateFriendFamily(friend).subscribe()
  }

  addFriend(friend: Friend) {
    this.friendService.addFriend(friend).subscribe((friend) => (this.friends.push(friend)))
  }

}
