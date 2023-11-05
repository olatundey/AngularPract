import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private requeryUrl = 'https://localhost:7255/api/WalletMiddleware/MicroserviceTransRequery';
  private initiateTransactionUrl = 'https://localhost:7255/api/WalletMiddleware/InitiateTransaction';
  private completeTransactionUrl = 'https://localhost:7255/api/WalletMiddleware/CompleteTransaction';
  

  constructor(private http: HttpClient) {}

  sendRequest(data: any): Observable<any> {
    // Define your custom headers here
    const headers = new HttpHeaders()
      .set('AuthorizationKey', 'QXJ....jY=')
      .set('PublicKey', 'RUYyQTdBODctMUR......GOC0tMTRFQzYyOEVDMDA4')
      .set('HashKey', '005d023........5af414bbba');

    // Define the request parameters
    const requestParams = {
      transactionRef: data.transactionRef,
      paymentRef: data.paymentRef,
      accountNo: data.accountNo
    };

    // Make an HTTP POST request with the headers and parameters
    return this.http.post(this.requeryUrl, requestParams, { headers });
  }

  initiateTransaction(data: any): Observable<any> {
    const headers = new HttpHeaders()
     .set('AuthorizationKey', 'QXJ....jY=')
      .set('PublicKey', 'RUYyQTdBODctMUR......GOC0tMTRFQzYyOEVDMDA4')
      .set('HashKey', '005d023........5af414bbba');

    return this.http.post(this.initiateTransactionUrl, data, { headers });
  }

  completeTransaction(result: any): Observable<any> {
    const headers = new HttpHeaders()
     .set('AuthorizationKey', 'QXJ....jY=')
      .set('PublicKey', 'RUYyQTdBODctMUR......GOC0tMTRFQzYyOEVDMDA4')
      .set('HashKey', '005d023........5af414bbba');

    return this.http.post(this.completeTransactionUrl, result, { headers });
  }
}
