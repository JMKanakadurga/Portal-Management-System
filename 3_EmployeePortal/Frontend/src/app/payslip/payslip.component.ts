import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit{
  
    title = 'html-to-pdf-angular-application';
    public convertToPDF()
  {
  html2canvas(document.body).then(canvas => {
  // Few necessary setting options
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var width = pdf.internal.pageSize.getWidth();
  var height = canvas.height * width / canvas.width;
  pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  pdf.save('PaySlip.pdf'); // Generated PDF
  });
}



  print:any;
  constructor(private router:Router,private http:HttpClient) { }
  inUrl:string='http://localhost:3000/payslip';
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
    this.router.navigate(['/dashboard']);
  }

}


