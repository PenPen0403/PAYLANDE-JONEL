import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  OArr = [0];
  ArrNum = 1;
  ShowArr: String = this.OArr.toString();
  Show: boolean = false;
  constructor(private authen: AuthenticationService, private data:DataService) {}

  BeAuthorized(){
    console.log('You are authorized');
    this.authen.authenticate = true;
  }

  NotAuthorized(){
    console.log('You are not authorized :(');
    this.authen.authenticate = false;
    this.Show = false;
  }

  async AddObject() {
    if (this.authen.authenticate) {
      console.log('Added an element to the object!')
      this.OArr = [...this.OArr, this.ArrNum];
      this.ArrNum += 1;
      this.ShowArr = this.OArr.toString();
      this.Show = true;
    } else {
      try {
        await this.data.isNotAuthorized();
      } catch (error) {
        console.error(error);
      }
    }
  }

  async ShowObject() {
    if (this.authen.authenticate) {
      console.log(this.OArr);
      this.Show = true;
    } else {
      try {
        await this.data.isNotAuthorized();
      } catch (error) {
        console.error(error);
      }
    }
  }
}
