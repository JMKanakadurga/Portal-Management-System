import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinanceComponent } from './finance/finance.component';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { LoginComponent } from './login/login.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { QuotationComponent } from './quotation/quotation.component';
import { VendorInvoiceComponent } from './vendor-invoice/vendor-invoice.component';

import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorpaymentsComponent } from './vendorpayments/vendorpayments.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'vendor-profile',
    component:VendorProfileComponent
  },
  {
    path:'quotation',
    component:QuotationComponent
  },
  {
    path:'goods-receipt',
    component:GoodsReceiptComponent
  },
  {
    path:'purchase-order',
    component:PurchaseOrderComponent
  },
  {
    path:'finance',
    component:FinanceComponent
  },
  {
    path:'credit',
    component:CreditComponent
  },
  {
    path:'vendorpayments',
    component:VendorpaymentsComponent
  },
  {
    path:'vendor-invoice',
    component:VendorInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
