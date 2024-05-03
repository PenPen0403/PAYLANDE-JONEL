import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authenticated: boolean = false;
  constructor(
    private router:Router, 
    private alertCtrl:AlertController,
    private toastCtrl: ToastController) { }
  setAuthentication(auth:boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn","true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }
  canActivate(){
    if (localStorage.getItem("loggedIn") == "true") {
      return true;
    }
    
    return false
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

  async pToast(message: string, duration: number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async ppToast(message: string, mess: string) {
    const toast = await this.toastCtrl.create({
        message: message,
        duration: 2000, 
        position: 'bottom', 
        color: 'success', 
        buttons: [
            {
                side: 'end', 
                text: 'OK', 
                role: 'cancel', 
                handler: () => {
                    console.log('Toast dismissed'); 
                }
            }
        ]
    });
    toast.present();
}

async showAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
        header: title,
        message: message,
        buttons: ['OK']
    });
    await alert.present();
}



  }



