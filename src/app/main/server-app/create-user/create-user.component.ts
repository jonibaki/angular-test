import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserListService } from '../user-list.service';
import { UserService } from '../user/user-service.service';
import { UserStatusService } from '../user/user-status.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  constructor(public user: UserListService) { }

  ngOnInit(): void {
  }
  
  onCreateUser(name:any, status:any): void {
    this.user.updateList(new UserService(name.value.trim(), new UserStatusService(status.value)));
  }

}
