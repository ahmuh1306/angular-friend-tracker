import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/Friend';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-friend-individual',
  templateUrl: './friend-individual.component.html',
  styleUrls: ['./friend-individual.component.css']
})
export class FriendIndividualComponent implements OnInit {
  @Input()
  friend!: Friend;
  @Output() onDeleteFriend: EventEmitter<Friend> = new EventEmitter();
  @Output() onToggleFamily: EventEmitter<Friend> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(friend: Friend) {
    this.onDeleteFriend.emit(friend);
  }

  onToggle(friend: Friend) {
    this.onToggleFamily.emit(friend);
  }

}
