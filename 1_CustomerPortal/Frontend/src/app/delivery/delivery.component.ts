import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  constructor(private router:Router,private http:HttpClient) { }
  inUrl:string='http://localhost:2000/delivery';
  data:any;
  ngOnInit(): any {
    var a=localStorage.getItem("USERIDD")
    console.log(a);
    return this.http.post(this.inUrl,{USERID:a}).subscribe((response:any) =>{
            this.data=JSON.parse(JSON.stringify(response));
      }
      );
    }
    goback(){
      this.router.navigate(['/dashboard'])
    }

}
  


