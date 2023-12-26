import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavedata',
  templateUrl: './leavedata.component.html',
  styleUrls: ['./leavedata.component.css']
})
export class LeavedataComponent implements OnInit {
  constructor(private router:Router,private http:HttpClient) { }
  inUrl:string='http://localhost:3000/leavedata';
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

}
