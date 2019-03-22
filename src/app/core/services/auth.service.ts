import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable()
export class AuthService {
  user: Observable<User | null>;
}
