import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  users = new User();
  id: any;
  status: string[] = [
    'Completed',
    'Ongoing',
    'Hiatus',
    'Dropped'
  ]
  constructor(
    private router: ActivatedRoute,
    private hms: HomeService,
    private authen: AuthService,
    private loadCtrl: LoadingController,
    private rout: Router
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.synchUpdate(this.hms.newUserList);
  }
  async updateManhwa() {
    if (this.validation()) {
      let loader = await this.loadCtrl.create({
        message: "Updating..."
      });
      await loader.present();
      if (this.users.id) {
        this.hms.tryUpdate(this.users);
        this.authen.ppToast('SUCCESS', 'SUCCESSFULLY UPDATED.')
      }
      this.users = new User();
      await loader.dismiss();
      this.rout.navigate(['home']);
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

  synchUpdate(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.manhwaName = user.manhwaName;
        this.users.author = user.author;
        this.users.chapter = user.chapter;
        this.users.releaseDate = user.releaseDate;
        this.users.status = user.status;
        this.users.adultContent = user.adultContent;
      }
    });
  }
}
