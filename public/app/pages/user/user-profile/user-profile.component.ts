import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { ToastService } from '../../../services/shared/toast.service';
import { User } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
    currentUser: User = <User>{};

    constructor(private _userService: UserService,
        private _toastService: ToastService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(x => {
                if (x.username !== this._activatedRoute.snapshot.params['username']) {
                    this._router.navigate(['/wronguser']);
                }

                this.currentUser = x;
            },
            err => this._toastService.activate(err, false));
    }
}
