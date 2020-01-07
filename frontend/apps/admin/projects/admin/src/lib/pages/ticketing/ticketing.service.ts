import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TicketingModel } from './ticketing.model';
import { Observable } from 'rxjs';


@Injectable()
export class TicketingService {

    url: string;

    constructor(
        private http: HttpClient,
        @Inject('env') private env: any
    ) {
        this.url = `${this.env.apiEndPoint}${this.env.apis.ticket}`;
    }

    addTicket(payload: TicketingModel): Observable<any> {
        return this.http.post(`${this.url}/add`, payload);
    }

    updateTicket(payload: TicketingModel, ticketId: string): Observable<any> {
        return this.http.patch(`${this.url}/update/${ticketId}`, payload);
    }

    removeTicket(ticketId: string): Observable<any> {
        return this.http.delete(`${this.url}/delete/${ticketId}`);
    }

    getAllTickets(): Observable<any> {
        return this.http.get(`${this.url}/get`);
    }

    getOneTicket(ticketId: string): Observable<any> {
        return this.http.get(`${this.url}/get/${ticketId}`);
    }
}
