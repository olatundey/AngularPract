import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharedResponseService } from '../shared-response.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-response',
  templateUrl: './transaction-response.component.html',
  styleUrls: ['./transaction-response.component.css']
})
export class TransactionResponseComponent implements OnInit {
  response: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private sharedResponseService: SharedResponseService) {}

  ngOnInit() {
        // Subscribe to the response data observable
        // this.sharedResponseService.responseData$.subscribe((response) => {
        //   this.response = response;
        //   console.log('Response Data:', this.response); // Log the response data
        // });
            // Retrieve the response data from the shared service
    this.response = this.sharedResponseService.responseData$;
    //this.response = this.route.snapshot.paramMap.get('responseData');
    console.log('Response Data:', this.response); // Log the response data
      }
    }


  //   // Retrieve the response data from the shared service
  //   this.response = this.sharedResponseService.responseData;
  //   console.log('Response Data:', this.response); // Log the response data

  // }
//}

