import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  isLoading: boolean = false;

  fetchData(): Promise<string> {
    return new Promise(resolve =>{
      setTimeout(() => {
        resolve('Data fetched successfully');
      },2000);
    });
  }

    angfetchData() {
      return new Promise((resolve, reject) => {
        const errorCondition = true;
        if (errorCondition) {
          setTimeout(() => {
            reject (new Error('Failed to show and Add Data '));
          }, 2000)
        } else {
          setTimeout(() => {
            resolve('Data fetched successfully');
          }, 2000)
        console.log(this.isLoading = false);
        }
      });
    }
  
}
