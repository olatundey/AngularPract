import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { PaymentComponent } from './payment/payment.component';
import { RequeryComponent } from './requery/requery.component';
import { RequeryResponseComponent } from './requery-response/requery-response.component';
import { InitiateTransResponseComponent } from './initiate-trans-response/initiate-trans-response.component';
import { InitiateTransactionComponent } from './initiate-transaction/initiate-transaction.component';
import { TransactionResponseComponent } from './transaction-response/transaction-response.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'pay', component: PaymentComponent },
  { path: 'requery', component: RequeryComponent },
  { path: 'requery-response', component: RequeryResponseComponent },
  { path: 'pay', component: InitiateTransactionComponent },
  { path: 'initiate-response', component: InitiateTransResponseComponent },
  { path: 'transaction-completed', component: TransactionResponseComponent },

  { path: '**', redirectTo: '' }, // Redirect to the home component for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
