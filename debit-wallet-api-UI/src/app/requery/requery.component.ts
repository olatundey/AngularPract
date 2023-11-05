import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; // Import the Router
import { SharedResponseService } from '../shared-response.service';

@Component({
  selector: 'app-requery',
  templateUrl: './requery.component.html',
  styleUrls: ['./requery.component.css']
})
export class RequeryComponent {
  apiResponse: any;
  requestData: any = {
    transactionRef: '',
    paymentRef: '',
    accountNo: ''
  };

  constructor(private apiService: ApiService, private router: Router,
    private sharedResponseService: SharedResponseService
    ) {}

  onSubmit() {
    this.apiService.sendRequest(this.requestData).subscribe(response => {
      console.log('API response:', response);
     // this.apiResponse = response;
       // Navigate to the Requery-ResponseComponent and pass the response data using Angular Router
   // this.router.navigate(['/requery-response'], { state: { data: response } });
  
   // Store the response data in the service
    this.sharedResponseService.responseData$ = response;

    // Navigate to the Requery-ResponseComponent
    this.router.navigate(['/requery-response']);
    });
  }
}
