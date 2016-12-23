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
    constructor(private _authService: AuthService) {

    }
}