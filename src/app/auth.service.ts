import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authenticated: boolean = false;
  constructor(private router:Router, private alertCtrl:AlertController) { }
  setAuthentication(auth:boolean) {
    if (auth) {
      localStorage.setItem("loggedIn","true");
    }
  }
  canActivate(){
    return this.authenticated;
  }

  async signup(email: string, password: string) {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  async login(email: string, password: string) {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async presentAlert(header: string, message: string ){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  } 

  }



