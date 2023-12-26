import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { VendorInvoiceComponent } from './vendor-invoice/vendor-invoice.component';
import { QuotationComponent } from './quotation/quotation.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { FinanceComponent } from './finance/finance.component';
import { CreditComponent } from './credit/credit.component';
import { VendorpaymentsComponent } from './vendorpayments/vendorpayments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PurchaseOrderComponent,
    GoodsReceiptComponent,
    VendorInvoiceComponent,
    QuotationComponent,
    VendorProfileComponent,
    FinanceComponent,
    CreditComponent,
    VendorpaymentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
