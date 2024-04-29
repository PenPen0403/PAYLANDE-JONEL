import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string='';
  password: string = '';
  confirmPass: string = '';
  constructor(
    private alertCtrl:AlertController, private router: Router, private authen:AuthService

  ) { }

  ngOnInit() {
  }
  signingUp(){
    if (!this.email || !this.password || !this.confirmPass){
      this.authen.presentAlert('Error','Please fill-out all the fields');
      return;
    }

    if (this.password != this.confirmPass){
      this.authen.presentAlert('Error','Password does not match');
      return;
    }
    
    if (!this.email.includes('.') || !this.email.includes('@')){
      this.authen.presentAlert('Error','Please put a valid email address');
      return;
    }

    this.authen.signup(this.email, this.password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.authen.presentAlert('Success','Signed Up Succesfully!');
      this.router.navigate(['login']);
    })
    .catch((error) => {
      const errorcode = error.code;
      const errormsg = error.message;
      this.authen.presentAlert('Error','Already Signed Up!');
    });
    this.email = '';
    this.password = '';
    this.confirmPass = '';
  }
}
