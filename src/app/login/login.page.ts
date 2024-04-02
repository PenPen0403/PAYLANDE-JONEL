import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  usernameArray = ['jonel', 'paylande'];
  passwordArray = ['123', '456'];

  constructor(private router: Router,
              private loginServ: LoginService,
              private toastContrl: ToastController,
              private aletContrl: AlertController,
              private authenticate: AuthenticationService ) { }

  ngOnInit() {}

  proceedLogin(){
    for (let i=0; i< this.usernameArray.length; i++){
      if((this.username === this.usernameArray[i]) && (this.password === this.passwordArray[i])){
        this.loginServ.login = true
        localStorage.setItem('logged', 'true');
      }
    }
    if (this.loginServ.login){
      this.showAlert();
      localStorage.setItem('name', this.username);
      this.router.navigate(['dashboard/home']);
      this.authenticate.authenticated=true;
    } else{
      this.toastPr();
    }
  }


async toastPr(){
  const toast = await this.toastContrl.create({
    header: 'Login',
    message: 'Login Failed!',
    color: 'danger',
    buttons: ['Try Again'],
  });
  await toast.present();
}

async showAlert(){
  const alert = await this.aletContrl.create({
    header: 'Login',
    subHeader: 'Status',
    message: 'Login success!',
    buttons: ['OK']
});
alert.present();
}

}

