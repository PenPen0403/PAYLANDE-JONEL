import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { AlertController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User, iUser } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  userList: iUser[] = [];
  users = new User();
  darkTheme = false;
  

  constructor(
    private hms: HomeService,
    private alertController: AlertController,
    private route: Router,
    private authen: AuthService
  ) {}

  

  ionViewWillEnter() {
    this.user();
  }

  goToAddManhwa() {
    this.route.navigate(['/add-manhwa']);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  update(user: User) {
    this.route.navigate(['update', user.id]);
    this.hms.newUserList = this.userList;
    this.hms.edit(user);
    console.log(this.userList);
  }

  addUser() {
    this.route.navigate(['update']);
  }

  async user() {
    this.userList = await this.hms.getUsers();
    this.hms.newUserList = this.userList;
  }

  
  async delete(user: User) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this Manhwa?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: async () => {
            await this.hms.tryDelete(user);
            this.authen.presentAlert('SUCCESS', 'DELETED SUCCESSFULLY');
            this.userList = this.userList.filter(u => u.id !== user.id);
            this.users = new User();
          }
        }
      ]
    });
  
    await alert.present();
  }

  logOut(){
    this.route.navigate(['login']);
    this.authen.setAuthentication(false);
  }

  goToProfile() {
    if (this.authen.canActivate()) {
      this.authen.setAuthentication(true);
      this.route.navigate(['dashboard']);
    }
  }

  toggleTheme() {

    this.darkTheme = !this.darkTheme;

    
    if (this.darkTheme) {
      
      document.body.classList.add('dark-theme');
    } else {
     
      document.body.classList.remove('dark-theme');
    }
  }
}

