import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedResponseService } from '../shared-response.service';

@Component({
  selector: 'app-requery-response',
  templateUrl: './requery-response.component.html',
  styleUrls: ['./requery-response.component.css']
})
export class RequeryResponseComponent implements OnInit {
  responseData: any;

  constructor(private sharedResponseService: SharedResponseService) {  }

  ngOnInit() {
    // Retrieve the response data from the shared service
    //this.responseData = this.sharedResponseService.responseData;
    this.responseData = this.sharedResponseService.responseData$;

  }
}

// access the data from the route's state object, 

//   responseData: any;

//   constructor(private route: ActivatedRoute) {
//     // Retrieve the response data from the route's state
//    // this.responseData = this.route.snapshot.paramMap.get('data');
//    this.responseData = this.route.snapshot.data['data'];
    
//      // passing data using route state,  access with below:
//     // if (this.route.snapshot.data && this.route.snapshot.data['data']) {
//     //   this.responseData = this.route.snapshot.data['data'];
//     //}
//     //Using Angular's Router to navigate to the requery-response component and pass the data through route state
//   }
// }