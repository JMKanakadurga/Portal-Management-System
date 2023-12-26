import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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
  quote(){
    this.router.navigate(['/quotation']);
  }
  order(){
    this.router.navigate(['/purchase-order']);
  }
  goods(){
    this.router.navigate(['/goods-receipt']);
  }
  fin(){
    this.router.navigate(['/finance']);
  }
  
 
}
