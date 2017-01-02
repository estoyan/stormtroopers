import { Component } from '@angular/core';

import { LocalStorageService } from '../../services/shared/local-storage.service';

@Component({
  moduleId: module.id,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  constructor(private _localeStorageService: LocalStorageService) { }

  get username() {
        let user = this._localeStorageService.getUser();
        if (user) {
            return user.username;
        }

        return null;
    }
}
