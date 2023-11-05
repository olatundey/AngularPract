import { Component, OnInit } from '@angular/core';
import { SharedResponseService } from '../shared-response.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-initiate-trans-response',
  templateUrl: './initiate-trans-response.component.html',
  styleUrls: ['./initiate-trans-response.component.css']
})
export class InitiateTransResponseComponent implements OnInit{
  //responseData: any;
  response: any;
  requestData: any = {
    otp: '',
    transactionRef: ''
  };

  constructor(private apiService: ApiService, private router: Router, 
    private route: ActivatedRoute,
    private sharedResponseService: SharedResponseService) {}

  // ngOnInit() {
  //   this.sharedResponseService.responseData$.subscribe((response) => {
  //     this.responseData = response;
  //     //this.requestData.transactionRef = this.responseData.transactionReference;
  //   });
  // }

  ngOnInit() {
    // Retrieve the response data from the shared service
    //this.responseData = this.sharedResponseService.responseData$;
    //this.requestData.transactionRef = this.responseData.transactionReference;
  }

    completeTransaction() {
    this.requestData.otp = btoa(this.requestData.otp);
    this.apiService.completeTransaction(this.requestData).subscribe({
      next: (response) => {
        this.handleSuccessResponse(response);
      },
      error: (error) => {
        this.handleErrorResponse(error);
      }}
    );
  }

  private handleSuccessResponse(response: any) {
    console.log('completeTransaction response:', response);
          this.response = response;

   // this.sharedResponseService.updateResponseData(response);
   // this.router.navigate(['/transaction-completed']);
  }

  private handleErrorResponse(error: any) {
    console.error('Error in completeTransaction:', error);
    // Handle the error as needed, e.g., show an error message to the user
  }
}






  
//   private handleSuccessResponse(response: any) {
//     console.log('completeTransaction response:', response);
//     this.sharedResponseService.updateResponseData(response);
//     this.router.navigate(['/transaction-completed']);
//   }
  
//   private handleErrorResponse(error: any) {
//     console.error('Error in completeTransaction:', error);
//     // Handle the error as needed, e.g., show an error message to the user
//   }
// }  


  // ngOnInit() {
  //   this.sharedResponseService.responseData$.subscribe((response) => {
  //     this.responseData = response;
  //     this.requestData.transactionRef = this.responseData.transactionReference;
  //   });
  // }
  
// completeTransaction() {
//   this.requestData.otp = btoa(this.requestData.otp);
//   this.apiService.completeTransaction(this.requestData).subscribe({
//     next: (response) => {
//       console.log('completeTransaction response:', response);
//       this.sharedResponseService.updateResponseData(response);
//       this.router.navigate(['/transaction-completed']);
//     },
//     error: (error) => {
//       console.error('Error in completeTransaction:', error);
//     }
//   });
// }
// }

  // completeTransaction() {
  //       // Encode the OTP value to Base64
  //   this.requestData.otp = btoa(this.requestData.otp);

  //   // Make the API call to complete the transaction
  //   this.apiService.completeTransaction(this.requestData).subscribe(response => {
  //     console.log('completeTransaction response:', response);
  //     this.router.navigate(['/transaction-completed']);
  //   });


  // completeTransaction() {
  //   this.requestData.otp = btoa(this.requestData.otp);
  //   this.apiService.completeTransaction(this.requestData).subscribe({
  //     next: (response) => {
  //       console.log('completeTransaction response:', response);
  //       this.response = response; // Assign the response here
  //       this.router.navigate(['/transaction-completed']);
  //     },
  //     error: (error) => {
  //       console.error('Error in completeTransaction:', error);
  //     }
  //   });
  // }
//}





