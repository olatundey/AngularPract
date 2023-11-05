import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { RequeryComponent } from './requery/requery.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RequeryResponseComponent } from './requery-response/requery-response.component';
import { SharedResponseService } from './shared-response.service';
import { InitiateTransactionComponent } from './initiate-transaction/initiate-transaction.component';
import { InitiateTransResponseComponent } from './initiate-trans-response/initiate-trans-response.component';
import { TransactionResponseComponent } from './transaction-response/transaction-response.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    RequeryComponent,
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    RequeryResponseComponent,
    InitiateTransactionComponent,
    InitiateTransResponseComponent,
    TransactionResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
