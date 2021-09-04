import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/Friend';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  @Output() onAddFriend: EventEmitter<Friend> = new EventEmitter()

  name!: string;
  dateofbirth!: string;
  family: boolean = false;
  showAddFriend: boolean = false;
  subscription: Subscription;
  

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddFriend = value))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name) {
      alert('Please add a friend you loner!');
      return;
    }

    const newFriend = {
      name: this.name,
      dateofbirth: this.dateofbirth,
      family: this.family
    }

    this.onAddFriend.emit(newFriend)

    this.name = '';
    this.dateofbirth = '';
    this.family = false;
  }

}
