import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(

    private authen:AuthService, 
    private router:Router, 
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }

  
  logIn(){
    this.authen.login (this.email, this.password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.authen.setAuthentication(true);
      this.authen.presentAlert('Success','Logged In Successfully!');
      this.authen.authenticated = true;
      this.router.navigate(['home']);
    })
    .catch((error) => {
      const errorcode = error.code;
      const errormsg = error.message;
      console.log(error)
      this.authen.presentAlert('Error','Please put the correct email and password!')
    });
  }

  goToSignUp(){
    this.router.navigate(['signup']);
  }
}
