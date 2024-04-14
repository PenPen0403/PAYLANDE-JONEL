import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  authenticate = false;

  constructor() {}
  canActivate() {
    return this.authenticate;
  }
}
