import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../services/shared/user.service';
import { User } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.css']
})

export class UpdateProfileComponent implements OnInit {
    currentUser: User = new User();

    constructor(private _router: Router,
        private _userService: UserService) {
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(x => this.currentUser = x);
    }

     onSubmit() {
        // this._userService.update(this.newUser)
        //     .subscribe((user) => {
        //         this._authService.login({ username: this.newUser.username, password: this.newUser.password })
        //             .subscribe(data => {
        //                 this._toasService.activate('Welcome on board trooper!')
        //                 this._router.navigate(['home']);
        //             });
        //     });
    }
}