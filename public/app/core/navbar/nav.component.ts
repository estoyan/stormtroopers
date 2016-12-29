import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from '../../services/authentication/auth.service';
import { LocalStorageService } from '../../services/shared/local-storage.service';

@Component({
    moduleId: module.id,
    selector: 'st-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavComponent {
    private _displayname: string;
    private _username: string;
    private _avatar: string;
    private _side: string;
    isCollapsed: boolean = true;
    disabled: boolean = false;
    status: { isopen: boolean } = { isopen: false };

    constructor(private _authService: AuthService,
        private _localeStorageService: LocalStorageService) { }

    get displayname() {
        let user = this._localeStorageService.getUser();
        if (user) {
            return user.displayname;
        }
        return null;
    }

    // set displayname(value: string) {
    //     this._displayname = value;
    // }

    get username() {
        let user = this._localeStorageService.getUser();
        if (user) {
            return user.username;
        }
        return null;
    }

    get avatar() {
        let user = this._localeStorageService.getUser();
        if (user) {
            return user.avatarUrl;
        }
        return null;
    }

    get side() {
        let user = this._localeStorageService.getUser();
        if (user) {
            switch (user.side) {
                case 'Dark': return 'red'
                case 'Light': return 'skyblue'
                default: return 'white'
            }
        }

        return 'white';
    }

    toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}