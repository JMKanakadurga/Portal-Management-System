import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent {
  Vendor: any;
  constructor(private router : Router, private http:HttpClient,private sd:FormBuilder) { }
  showFiller = true;
  Name:any;
  Customer:any;
  Phone:any;
  Region:any;
  Postal:any;
  City:any;
  Country:any;
  result:any;
  Street:any;

  inUrl:string = 'http://localhost:3000/vendor-profile'; 
  data:any;


  ngOnInit(): any {
    var a=localStorage.getItem("USERIDD")
      console.log(a);
    return this.http.post(this.inUrl,{
      
      USERID : a
      }).subscribe(response =>{
        
      this.data=JSON.parse(JSON.stringify(response));
       this.Name = this.data["NAME"];
       this.City = this.data["CITY"];
       this.Country = this.data["COUNTRY"];
       this.Postal = this.data["POSTAL_CODE"];
       this.Phone = this.data["TELEPHONE"];
       this.Region = this.data["REGION"];
       this.Vendor = this.data["VENDOR_ID"];
       this.Street = this.data["STREET"];
       
      
console.log(this.Name);

   var result=this.data;
});
 
}
}


