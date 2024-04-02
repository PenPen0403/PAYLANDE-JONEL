import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Api } from '../api.model';
import { SampleService } from '../sample.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apis: Api[]= [];
  usernme: any;
  id: any;
  data: any;

  constructor(private logout: LoginService,
              private auth: AuthenticationService,
              private router: Router,
              private sample: SampleService) {
            this.usernme= localStorage.getItem('name');
              }
   ngOnInit():void{
    this.fetchData();
    
  }
  loggedOut(){
    this.logout.login = false;
    localStorage.removeItem('logged');
    this.router.navigate(['login']);
  }

  async fetchData(){
    await this.sample.getApi().subscribe((response)=>{
      this.data = response.result;
      this.data =this.data.slice(0,4);
    })
  }

}
