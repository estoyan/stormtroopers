import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { Publication } from '../../../models/publication.model';
import { ToastService } from '../../../services/shared/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './user-publications.component.html',
    styleUrls: ['./user-publications.component.css']
})

export class UserPublicationsComponent implements OnInit {
    publications: Publication[];

    constructor(private _router: Router,
        private _userService: UserService,
        private _toastService: ToastService
    ) {
    }

    ngOnInit() {
        this._userService.getUserPublications()
            .subscribe((publ: Publication[]) => this.publications = publ,
            err => this._toastService.activate(err, false));
    }
}
