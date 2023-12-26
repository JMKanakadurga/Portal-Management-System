import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmprofileComponent } from './emprofile/emprofile.component';
import { LeavedataComponent } from './leavedata/leavedata.component';
import { LoginComponent } from './login/login.component';
import { PayslipComponent } from './payslip/payslip.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'emprofile',
    component:EmprofileComponent
  },
  {
    path:'leavedata',
    component:LeavedataComponent
  },
  {
    path:'payslip',
    component:PayslipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
