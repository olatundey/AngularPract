import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedResponseService } from '../shared-response.service';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-initiate-transaction',
  templateUrl: './initiate-transaction.component.html',
  styleUrls: ['./initiate-transaction.component.css']
})
export class InitiateTransactionComponent {

  response: any;
  requestData: any = {
    merchantName: 'mark',
    customerName: 'adam',
    accountNo: '6320072910',
    phoneNo: '08123345430',
    emailAddress: 'a@b.com',
    address: 'Birmingham',
    transactionReference: '34321',
    amount: 100,
    narration: 'string',
    billingCode: '9mobile',
    productCode: '9mobile',
    transactionDate: new Date().toISOString(),
    responseUrl: 'string'
  };

  constructor(private apiService: ApiService, private router: Router,
    private sharedResponseService: SharedResponseService) {}

  initiateTransaction() {
    this.apiService.initiateTransaction(this.requestData).subscribe(response => {
      console.log('API response:', response);
      this.sharedResponseService.responseData$ = response;
      this.router.navigate(['/initiate-response']);
    });
  }
  
}
