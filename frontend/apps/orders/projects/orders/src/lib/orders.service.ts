import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OrderModel } from './order-model';
import { Observable } from 'rxjs';


@Injectable()
export class OrdersService {

  url: string;

  constructor(
      private http: HttpClient,
      @Inject('env') private env: any
  ) {
      this.url = `${this.env.apiEndPoint}${this.env.apis.order}`;
  }

  addOrder(payload: OrderModel): Observable<any> {
    return this.http.post(`${this.url}/createOrder`, payload);
  }

  updateOrder(payload: OrderModel): Observable<any> {
    return this.http.patch(`${this.url}/updateOrder`, payload);
  }

  removeOrder(payload: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: payload
    };

    return this.http.delete(`${this.url}/delete`, httpOptions);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.url}/getAllOrders`);
  }

  getOneOrder(orderName: string): Observable<any> {
    const param = new HttpParams().set('_id', orderName);
    return this.http.get(`${this.url}/getRecord`, { params: param });
  }
}
