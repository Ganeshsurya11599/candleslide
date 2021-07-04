import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor(
    private http: HttpClient,
  ) { }

//  baseUrl = "http://localhost:8080/orders/"
    baseUrl = "https://paymentgateway-v1.herokuapp.com/orders/";

 postOrder(payload:any){
  return this.http.post(this.baseUrl + "createOrders", payload);
 }

}
