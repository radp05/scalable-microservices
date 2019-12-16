import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OrderModel } from './order-model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3002/api/v1/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  addOrder(payload: OrderModel): Observable<any> {
    return this.http.post(`${URL}/createOrder`, payload);
  }

  updateOrder(payload: OrderModel): Observable<any> {
    return this.http.patch(`${URL}/updateOrder`, payload);
  }

  removeOrder(payload: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: payload
    };

    return this.http.delete(`${URL}/delete`, httpOptions);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${URL}/getAllOrders`);
  }

  getOneOrder(orderName: string): Observable<any> {
    const param = new HttpParams().set('_id', orderName);
    return this.http.get(`${URL}/getRecord`, { params: param });
  }
}
