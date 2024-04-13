import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
input: string = '';
output: string= '';
showHistory: boolean = false;
history : {input: string , calculated: string} | null = null;
username: string | null= '';

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.authenticated = false;
    this.username= localStorage.getItem('name');
  }

  addNum(num: string){
    if(num=== '+'|| num === '-'|| num==='/'|| num === '*'){
      if(this.input.length === 0 || this.isOperator(this.input[this.input.length - 1])){
        return;
      }
    }
    this.input += num;
  }

  isOperator(opr: string){
    return opr === '+' || opr === '-' || opr === '/' || opr === '*';
  }

  clearInput(){
    this.input='';
  }

  calculate(){
    try{
      const calculated = eval(this.input);
      this.history={input: this.input, calculated: calculated.toString()};
      this.input = calculated.toString();
      this.showHistory=true;
      this.clearInput();
    } catch (error){
      this.input = 'Error, Click C to reset';
    }
  }





}
