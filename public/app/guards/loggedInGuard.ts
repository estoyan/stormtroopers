import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/authentication/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this._authService.isLoggedIn()) {
      return true;
    }

    this._router.navigate(['/home']);
    return false;
  }
}