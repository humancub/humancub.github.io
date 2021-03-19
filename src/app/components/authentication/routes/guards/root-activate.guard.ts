import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from '../../core';

@Injectable()
export class AuthenticationRootActivateGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(): boolean | UrlTree {
    const state = this.router.getCurrentNavigation().extras.state ?? {};
    const logoutConfirmed = state.logoutConfirmed ?? false;

    if (logoutConfirmed) {
      this.authenticationService.clearTokens();
    }

    console.log('loggedIn', this.authenticationService.isLoggedIn());

    return logoutConfirmed || !this.authenticationService.isLoggedIn()
      ? true
      : this.router.createUrlTree(['main-page']);
  }
}
