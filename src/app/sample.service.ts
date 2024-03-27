import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

getApi(): Observable<any>{
 return this.http.get<any>('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
}

  // getApi(){
  //   return this.http.get<Api[]>('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
  // }
}
