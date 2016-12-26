import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
    moduleId: module.id,
    selector: 'st-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent {
    public isCollapsed: boolean = true;
    private _displayname: string;
    constructor(private _authService: AuthService,
        private _userService: UserService) { }

    get displayname() {
        let user = this._userService.getUserFromLocalStorage();
        if (user) {
            return user.displayname;
        }

        return null;
    }
}