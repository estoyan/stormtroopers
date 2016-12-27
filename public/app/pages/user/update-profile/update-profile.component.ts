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

    constructor(private _router: Router,
        private _userService: UserService) {
    }

    ngOnInit() {

    }
}