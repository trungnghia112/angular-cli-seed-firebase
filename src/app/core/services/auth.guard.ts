import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';
import { Constants } from '@core/configs/constants';

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
    return this.auth.isAuthenticated.pipe(
      take(1),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.notify.update('You must be logged in!', 'error');
          this.router.navigate([Constants.loginUrl]);
        }
      })
    );
  }
}
