import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
    currentUser: User = <User>{};

    constructor(private _userService: UserService,
        private _router: Router) {
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(x => {
                if(x.username !== this._router.url.split('/')[2]){
                    this._router.navigate(['/wronguser']);
                }

                this.currentUser = x
            });
    }
}