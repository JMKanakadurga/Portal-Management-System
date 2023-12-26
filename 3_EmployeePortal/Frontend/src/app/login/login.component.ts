import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private http : HttpClient

  ){

  }
  ngOnInit(): void {
    
  }
  inUrl: string = 'http://localhost:3000/login'; 
  data: any;
  onSubmit(userid:any,password:any){ 
    return this.http.post(this.inUrl, { USERID: userid, PASSWORD: password }).subscribe( response => { this.data = JSON.parse(JSON.stringify(response)); 
    var result = this.data; 
    if(result === '"true"') { 
      localStorage.setItem("USERIDD",userid)
        this.router.navigate(['/dashboard']); 
    } else { 
        alert("Username or Password is Incorrect!!"); 
    
    } } ); } }
    


