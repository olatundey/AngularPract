import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:9002/enroll';
  constructor(private _http: HttpClient) { }

  register(userData: any) {
    return this._http.post<any>(this._url, userData);
     
  }
}

