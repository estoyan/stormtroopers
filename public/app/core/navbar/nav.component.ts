import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../services/authentication/auth.service';
import { NavbarService } from '../../services/shared/navbar.service';
import { LocalStorageService } from '../../services/shared/local-storage.service';
import { User } from '../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'st-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavComponent {
    private _updateUserInfoSubsciption: Subscription;
    displayname: string;
    username: string;
    avatar: string;
    side: string;
    isCollapsed: boolean = true;
    disabled: boolean = false;
    status: { isopen: boolean } = { isopen: false };

    constructor(private _authService: AuthService,
        private _navbarService: NavbarService,
        private _localeStorageService: LocalStorageService) { }


    ngOnInit() {
        this._updateUserInfoSubsciption = this._navbarService.getEmittedValue()
            .subscribe((newInfo: User) => {
                this.displayname = newInfo.displayname;
                this.username = newInfo.username;
                this.avatar = newInfo.avatarUrl;
                this.side = this.getSideColor(newInfo.side);
            });

        let user = this._localeStorageService.getUser();
        if (user) {
            this.displayname = user.displayname;
            this.username = user.username;
            this.avatar = user.avatarUrl;
            this.side = this.getSideColor(user.side);
        }
    }

    ngOnDestroy() {
        this._updateUserInfoSubsciption.unsubscribe();
    }

    private getSideColor(side: string): string {
        switch (side) {
            case 'Dark': return 'red';
            case 'Light': return 'skyblue';
            default: return 'white';
        }
    }

    toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
