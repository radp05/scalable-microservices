import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { OrderModel } from './orders-model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }
  addorder(payload: OrderModel): Observable<any> {
    return this.http.post(`${URL}/Order/add`, payload);
  }

  updateOrder(payload: OrderModel): Observable<any> {
    return this.http.put(`${URL}/Order/update`, payload);
  }

  removeOrder(payload: string): Observable<any> {
    return this.http.put(`${URL}/Order/remove`, payload);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${URL}/Order/all`);
  }
}
