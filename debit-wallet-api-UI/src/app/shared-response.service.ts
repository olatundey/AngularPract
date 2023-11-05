import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedResponseService {
  //responseData: any;
  private responseDataSubject = new BehaviorSubject<any>(null);
  responseData$ = this.responseDataSubject.asObservable();

  // constructor() {
  //   console.log('Shared response is:', this.responseData);
  //  }
  constructor() {
    console.log('Shared response service initialized');
  }

  updateResponseData(responseData: any) {
    this.responseDataSubject.next(responseData);
  }
   
}
//Modify your SharedResponseService to use BehaviorSubject from RxJS to store the data and provide a way to update it