import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
username: string | null= '';

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.authenticated=false;
    this.username=localStorage.getItem('name');
  }

  

}
