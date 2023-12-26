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
  profile(){
    this.router.navigate(['/profile']);

  }
  inquiry(){
    this.router.navigate(['/inquiry']);
  }
  sales(){
    this.router.navigate(['/salesorder']);
  }
  delivery(){
    this.router.navigate(['/delivery']);
  }
  invoice(){
    this.router.navigate(['/invoice']);
  }
  pay(){
    this.router.navigate(['/payments'])
  }
  memo(){
    this.router.navigate(['/credit'])
  }
    




}