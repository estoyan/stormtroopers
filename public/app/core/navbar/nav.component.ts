import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
    moduleId: module.id,
    selector: 'st-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent {
    public isCollapsed: boolean = true;
    private _displayname: string;
    constructor(private _authService: AuthService) { }

    get displayname() {
        let user = JSON.parse(window.localStorage.getItem('user'));
        if (user) {
            return user.displayname;
        }

        return null;
    }
}