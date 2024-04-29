import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
username: any;

  constructor(
    private route: Router,
    private authen: AuthService
  ) { }

  ionViewWillEnter() {
    this.username = localStorage.getItem("user")
    // this.username = this.signinService.username;
    if (!localStorage.getItem("isLogin")) {
      this.route.navigate(['dashboard'])
    }
  }

  ngOnInit() {
    this.authen.authenticated=false;
  }

  logOut(){
    this.authen.setAuthentication(false);
    this.route.navigate(['login']);
  }

}
