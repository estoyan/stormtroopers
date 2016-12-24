import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._authService.isLoggedin) {
      return true;
    }

    this._router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
    return false;
  }
}