import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  
  constructor(
    private router: Router
    

  ){

  }
  log(){
    this.router.navigate(['/login']);
  }
  prof(){
    this.router.navigate(['/vendor-profile']);

  }
  dash(){
    this.router.navigate(['/dashboard'])
  }
  invoice(){
    this.router.navigate(['/vendor-invoice']);
  }
  pay(){
    this.router.navigate(['/vendorpayments'])
  }
  memo(){
    this.router.navigate(['/credit'])
  }
  


}
