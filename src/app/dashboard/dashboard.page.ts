import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { ModalComponent } from '../modal/modal.component';
import { SampleService } from '../sample.service';
import { Api } from '../api.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   username: string | null= '';
  
  constructor(private modalCtrl: ModalController,
              private sample: SampleService,
              private auth: AuthenticationService,
              private router: Router) {
                
                
              }
  ngOnInit() {
    this.auth.authenticated = false;
    this.username= localStorage.getItem('name');
  }

  async toggleModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    })
    return await modal.present();
  };

  goToCalculator(){
    this.router.navigate(['calculator']);
    this.auth.authenticated=true;
  }



}

