import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;
  constructor() { }

  canActivate(){  
    if(localStorage.getItem('logged') === 'true'){
      return this.authenticated=true;
    } else{
      return this.authenticated;
    }
    
  }

}
