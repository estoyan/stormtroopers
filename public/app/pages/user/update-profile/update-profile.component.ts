import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { NavbarService } from '../../../services/shared/navbar.service';
import { ToastService } from '../../../services/shared/toast.service';
import { User } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.css']
})

export class UpdateProfileComponent implements OnInit {
    currentUser: User = <User>{};
    avatarOptions: string[] = ['Stormtrooper', 'Darth Vaider', 'Boba Fett', 'Empire', 'Rebels'];
    sideOptions: string[] = ['Dark', 'Light', 'Neutral'];

    constructor(private _router: Router,
        private _userService: UserService,
        private _navbarService: NavbarService,
        private _toasService: ToastService) {
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(x => this.currentUser = x,
            err => this._toasService.activate(err, false));
    }

    onSubmit() {
        this._userService.updateUser(this.currentUser)
            .subscribe((data: any) => {
                this._navbarService.updateUserInfo(data.body);
                this._toasService.activate('Trooper info successfully updated!', true);
                this._router.navigate([`user/${data.user.username}`]);
            },
            err => this._toasService.activate(err, false));
    }

    setUserAvatar(value: string): void {
        this.currentUser.avatarName = value;
    }

    setUserSide(value: string): void {
        this.currentUser.side = value;
    }
}
