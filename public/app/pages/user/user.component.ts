import { Component } from '@angular/core';

import { UserService } from '../../services/shared/user.service';

@Component({
  moduleId: module.id,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  private _username: string;
  
  constructor(private _userService: UserService) { }

  get username() {
        let user = this._userService.getUserFromLocalStorage();
        if (user) {
            return user.username;
        }

        return null;
    }
}
