import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  postCustomer(customerData: any){
    return this._http.post(environment.API_ENDPOINT + 'customer_info', customerData);
  }
}
