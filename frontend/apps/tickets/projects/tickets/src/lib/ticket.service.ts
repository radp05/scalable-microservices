import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TicketModel } from './ticket-model';
import { Observable } from 'rxjs';

@Injectable()
export class TicketService {

  url: string;

  constructor(
      private http: HttpClient,
      @Inject('env') private env: any
  ) {
      this.url = `${this.env.apiEndPoint}${this.env.apis.ticket}`;
  }

  addTicket(payload: TicketModel): Observable<any> {
    console.log("Entered frontend addTicket")
    return this.http.post(`${this.url}/add`, payload);
  }

  updateTicket(payload: TicketModel): Observable<any> {
    return this.http.patch(`${this.url}/update`, payload);
  }

  removeTicket(payload: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: payload
    };

    return this.http.delete(`${this.url}/delete`, httpOptions);
  }

  getAllTickets(): Observable<any> {
    console.log(`${this.url}` +"getAllTickets")
    return this.http.get(`${this.url}/get`);
  }

  getOneTicket(ticketId: string): Observable<any> {
    const param = new HttpParams().set('ticketId', ticketId);
    return this.http.get(`${this.url}/getRecord`, { params: param });
  }
}
