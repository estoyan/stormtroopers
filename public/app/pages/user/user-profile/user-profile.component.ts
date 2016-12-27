import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../services/shared/user.service';
import { User } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
    currentUser: User = <User>{};

    constructor(private _router: Router,
        private _userService: UserService) {
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(x => this.currentUser = x );
    }
}