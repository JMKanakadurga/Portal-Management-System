import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';

const routes: Routes = [
 
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'inquiry',
    component: InquiryComponent,
  },
  {
    path: 'salesorder',
    component: SalesorderComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'credit',
    component: CreditComponent,
  },
  {
    path: 'debit',
    component: DebitComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
