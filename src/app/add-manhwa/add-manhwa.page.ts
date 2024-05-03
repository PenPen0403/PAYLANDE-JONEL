import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoadingController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { User } from '../home/home.model';

@Component({
  selector: 'app-add-manhwa',
  templateUrl: './add-manhwa.page.html',
  styleUrls: ['./add-manhwa.page.scss'],
})
export class AddManhwaPage implements OnInit {
  users: User = new User();
  status: string[] = [
    'Completed',
    'Ongoing',
    'Hiatus',
    'Dropped'
  ]

  constructor(
    private hms: HomeService,
    private authen: AuthService,
    private loadCntrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  

  async addManhwa() {
    if (this.validation()) {
      let loader = await this.loadCntrl.create({
        message: "Please wait..."
      });
      await loader.present();
      if (!this.users.id) {
        this.hms.tryAdd(this.users);
        this.authen.ppToast('SUCCESS', 'SUCCESSFULLY ADDED.')
      }
      this.users = new User();
      await loader.dismiss();
      this.router.navigate(['home']);
    }
  }

  validation() {
    const { users, authen } = this;
    if (!users.manhwaName || !users.author || !users.chapter || users.chapter <= 0 || !Number.isInteger(users.chapter) || !users.releaseDate || !users.status || !users.adultContent) {
      authen.showAlert('Input Error', 'Please enter a valid value.');
      return false;
    }
    return true;
}
  

}
