import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
 input: string= '';
 history: string = '';
 fNumber: number = 0;
 sNumber: number= 0;
 equalsTo: boolean = false;
 strr: string = '';
 click: boolean = true;
 unclick: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  

}
