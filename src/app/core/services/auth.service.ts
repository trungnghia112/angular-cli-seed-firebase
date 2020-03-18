import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/user';
import { ApiService } from '@core/services/api.service';
import { JwtService } from '@core/services/jwt.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser: Observable<User> = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private apiService: ApiService,
              private jwtService: JwtService) {
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/users/profile')
        .subscribe(
          (res: any) => this.setAuth({...res.data, token: this.jwtService.getToken()}),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // console.log('setAuth', user);
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);

    // get app config
    this.getAppConfigs();
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  login(credentials): Observable<User> {
    return this.apiService.post('/login', credentials)
      .pipe(
        map(
          (res: any) => {
            if (res && res.data) {
              this.setAuth(res.data);
            }
            return res;
          }
        )
      );
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(
        map(
          (data: any) => {
            this.setAuth(data.user);
            return data;
          }
        )
      );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  isLoggedIn() {
    return this.isAuthenticatedSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
      .put('/users/profile', {user})
      .pipe(
        map((data: any) => {
          // Update the currentUser observable
          this.currentUserSubject.next(data.user);
          return data.user;
        })
      );
  }

  private async getAppConfigs() {
  }
}
