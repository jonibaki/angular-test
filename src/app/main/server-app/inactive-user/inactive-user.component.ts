import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { UserService } from '../user/user-service.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inActiveUser: UserService[] = [];
  constructor(public userList: UserListService) {}
  
  ngOnInit(): void {
    this.userList.subject.subscribe((user: UserService)=> {
      this.inActiveUser = this.userList.userList.filter(x => x.status.status  === 'Inactive');
    });
  }

}
