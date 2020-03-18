import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Constants } from '@core/configs/constants';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private notify: NotifyService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.auth.isLoggedIn();
    if (!loggedIn) {
      console.log('access denied');
      this.notify.update('You must be logged in!', 'error');
      this.router.navigate([Constants.loginUrl]);
    }
    return loggedIn;
  }
}
