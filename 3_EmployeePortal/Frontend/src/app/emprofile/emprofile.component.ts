import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emprofile',
  templateUrl: './emprofile.component.html',
  styleUrls: ['./emprofile.component.css']
})
export class EmprofileComponent implements OnInit{
ppl: any;
  constructor(private http:HttpClient,private route:Router) { }
  inUrl:string='http://localhost:3000/emprofile';
  data:any;
  ngOnInit(): any {
    var a=localStorage.getItem("USERIDD")
    console.log(a);
    return this.http.post(this.inUrl,{USERID:a}).subscribe((response: any) =>{
            this.ppl=JSON.parse(JSON.stringify(response));
      }
      );
  }

   
  

}
