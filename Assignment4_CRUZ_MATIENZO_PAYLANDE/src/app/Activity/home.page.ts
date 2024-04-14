import { Component } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  objectNum = 0;
  showArray: boolean= false;
  objectArr: number[] = [1,2];
  data: String = '';
  LoadingText: String = 'Loading...';
  isLoading: boolean = false;
  promise2 = this.dataService.fetchData();

  constructor(
    private AuthenticationService: AuthenticateService,
    private dataService: ServiceService,
 ) 
 {}

 async fetchData(){
  try{
    this.data = await this.dataService.fetchData();
    console.log(this.data);
  }catch (error) {
    console.error(error);
  }
}

 authenticate(){
  this.AuthenticationService.authenticate = true
}

unAuthenticate(){
  this.AuthenticationService.authenticate = false
}

showObject(){
  if (this.AuthenticationService.authenticate) {
    this.isLoading = true;
    this.dataService.angfetchData()
      .then(data => {
        console.log(data);
      })
      .finally(() => {
        console.log(this.showArray = true);
      });
  }
 else{
  this.dataService.angfetchData()
  .catch(error => {
    console.error(error);
  })
  alert("Please authenticate first.");
 }
}

addToObject() {
  if (this.AuthenticationService.authenticate) {
    const newObject = this.objectArr.length+1;
    this.isLoading = true;
    this.dataService.angfetchData()
      .finally(() => {
        console.log(this.objectArr = [...this.objectArr, newObject]);
      });
    
    

  }
  else{
    this.dataService.angfetchData()
    .catch(error => {
      console.error(error);
    })
    alert("Please authenticate first.");
    
   }

}

}
