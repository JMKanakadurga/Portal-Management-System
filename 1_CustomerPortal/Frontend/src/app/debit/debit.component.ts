import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  constructor(private router:Router,private http:HttpClient) { }
  inUrl:string='http://localhost:2000/debit';
  data:any;
  ngOnInit(): any {
    var a=localStorage.getItem("USERIDD")
    console.log(a);
    return this.http.post(this.inUrl,{USERID:a}).subscribe((response: any) =>{
            this.data=JSON.parse(JSON.stringify(response));
      }
      );
  }
  goback(){
    this.router.navigate(['/dashboard'])
  }
  debit(){
    this.router.navigate(['/credit'])
  }

}



