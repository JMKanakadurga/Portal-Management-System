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
  login(){
    this.router.navigate(['/login']);
  }
  emprof(){
    this.router.navigate(['/emprofile']);
  }
  leave(){
    this.router.navigate(['/leavedata']);
  }
  pay(){
    this.router.navigate(['/payslip']);
  }
  logout(){
    this.router.navigate(['/home']);
  }

}
