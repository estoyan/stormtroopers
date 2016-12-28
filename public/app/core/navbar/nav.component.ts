import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/authentication/auth.service';
import { UserService } from '../../services/shared/user.service';

@Component({
    moduleId: module.id,
    selector: 'st-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavComponent implements OnInit {
    displayname: string;
    username: string;
    avatar: string;
    isCollapsed: boolean = true;
    disabled: boolean = false;
    status: { isopen: boolean } = { isopen: false };

    constructor(private _authService: AuthService,
        private _userService: UserService) { }
   
    ngOnInit() {
        let user = this._userService.getUserFromLocalStorage();
        this.avatar = user.avatarUrl;
        this.displayname = user.displayname;
        this.username = user.username;
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}