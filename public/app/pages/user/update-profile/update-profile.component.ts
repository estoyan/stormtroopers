import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../services/shared/user.service';
import { ToastService } from '../../../services/shared/toast.service';
import { User } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.css']
})

export class UpdateProfileComponent implements OnInit {
    currentUser: User = new User();

    constructor(private _router: Router,
        private _userService: UserService,
        private _toasService: ToastService) {
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(x => this.currentUser = x);
    }

    onSubmit() {
        this._userService.updateUser(this.currentUser)
            .subscribe((data: any) => {
                this._toasService.activate('trooper info successfully updated!');
                this._router.navigate([`user/${data.user.username}`])
            });
    }
}