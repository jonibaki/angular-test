import { Injectable } from '@angular/core';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public name: string, public status: UserStatusService) { }
}
