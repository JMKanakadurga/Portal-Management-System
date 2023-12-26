import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-receipt',
  templateUrl: './goods-receipt.component.html',
  styleUrls: ['./goods-receipt.component.css']
})
export class GoodsReceiptComponent implements OnInit{
  constructor(private router:Router,private http:HttpClient) { }
  inUrl:string='http://localhost:3000/goods-receipt';
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


