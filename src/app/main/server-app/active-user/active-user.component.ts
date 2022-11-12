import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { UserService } from '../user/user-service.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  activeUser: UserService[] = [];
  constructor(public user: UserListService) { 
  }

  ngOnInit(): void {
    this.user.subject.subscribe((user: UserService)=> {
      this.activeUser = this.user.userList.filter(x => x.status.status  === 'Active');
    });
  }

}
