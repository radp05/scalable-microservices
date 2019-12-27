import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TicketModel } from './ticket-model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3004/api/v1/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) { }

  addTicket(payload: TicketModel): Observable<any> {
    console.log("Entered frontend addTicket")
    return this.http.post(`${URL}/add`, payload);
  }

  updateTicket(payload: TicketModel): Observable<any> {
    return this.http.patch(`${URL}/update`, payload);
  }

  removeTicket(payload: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: payload
    };

    return this.http.delete(`${URL}/delete`, httpOptions);
  }

  getAllTickets(): Observable<any> {
    console.log(`${URL}` +"getAllTickets")
    return this.http.get(`${URL}/get`);
  }

  getOneTicket(ticketId: string): Observable<any> {
    const param = new HttpParams().set('ticketId', ticketId);
    return this.http.get(`${URL}/getRecord`, { params: param });
  }
}
