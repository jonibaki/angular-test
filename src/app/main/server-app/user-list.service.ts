import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserService } from './user/user-service.service';
import { UserStatusService } from './user/user-status.service';
import { BehaviorSubject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
userList: UserService[] = [];
subject = new BehaviorSubject<UserService>(null);
  constructor() {
    this.initList();
    for (var i  of this.userList) {
      this.subject.next(i);
    }
  }
  initList(){
    this.userList.push(new UserService("Joni", new UserStatusService("Active")));
    this.userList.push(new UserService("Kelly", new UserStatusService("Active")));
    this.userList.push(new UserService("Keh Li", new UserStatusService("Active")));
    this.userList.push(new UserService("Tom", new UserStatusService("Inactive")));
    this.userList.push(new UserService("Dick", new UserStatusService("Inactive")));
  }
  updateList(user: UserService): void {
    if(!this.findMatchesUser(user) && user.name !== ''){
      this.userList.push(user);
      this.subject.next(user);
    }else{
      console.log("Bad request!");
    }
  }

  toggleStatus(user: UserService){
    if(user.status.status === "Active"){
      user.status.status = "Inactive";
    }else if(user.status.status === "Inactive"){
      user.status.status = "Active";
    }
    this.subject.next(user);
  }

  findMatchesUser(newUser: UserService): boolean {
    return this.userList.filter(x => x.name.toLowerCase() === newUser.name.trim().toLowerCase()).length>0;
  }

  removeUser(delUser: UserService): void {
    let index = this.userList.findIndex(x => x.name.toLowerCase() === delUser.name.trim().toLowerCase());
    console.log(index);
    this.userList.splice(index, 1);
    console.log(this.userList.length);
    this.subject.next(delUser);

  }

}
