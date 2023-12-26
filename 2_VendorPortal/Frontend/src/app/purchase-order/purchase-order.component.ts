import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit{
  constructor(private router:Router,private http:HttpClient) { }
  inUrl:string='http://localhost:3000/purchase-order';
  data:any;
  ngOnInit(): any {
    var a=localStorage.getItem("USERIDD")
    console.log(a);
    return this.http.post(this.inUrl,{USERID:a}).subscribe((response: any) =>{
            this.data=JSON.parse(JSON.stringify(response));
      }
      );
  }
  log(){
    this.router.navigate(['/login']);
  }
  prof(){
    this.router.navigate(['/vendor-profile']);

  }
  fin(){
    this.router.navigate(['/finance']);
  }
  goback(){
    this.router.navigate(['/dashboard'])
  }

}
   


