import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from 'app/services/auth.service';

@Injectable()
export class IsValidatedGuard implements CanActivate {

  constructor(private _auth: AuthService) {}

  canActivate(): boolean {
    if (this._auth.isValidated()) {
      return true;
    }
    return false;
  }
}
