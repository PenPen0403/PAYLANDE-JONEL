import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { ModalComponent } from '../modal/modal.component';
import { SampleService } from '../sample.service';
import { Api } from '../api.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  
  constructor(private modalCtrl: ModalController,
              private sample: SampleService) {
                
                
              }
  ngOnInit() {
 
  }

  async toggleModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    })
    return await modal.present();
  };



}

