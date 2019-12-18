import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TicketingModel } from './ticketing.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3004/api/v1/ticket';

@Injectable({
    providedIn: 'root'
})
export class TicketingService {

    constructor(
        private http: HttpClient
    ) { }

    addTicket(payload: TicketingModel): Observable<any> {
        return this.http.post(`${URL}/add`, payload);
    }

    updateTicket(payload: TicketingModel, ticketId: string): Observable<any> {
        return this.http.patch(`${URL}/update/${ticketId}`, payload);
    }

    removeTicket(ticketId: string): Observable<any> {
        return this.http.delete(`${URL}/delete/${ticketId}`);
    }

    getAllTickets(): Observable<any> {
        console.log("entered getAllTickets frontend "+URL)
        return this.http.get(`${URL}/get`);
    }

    getOneTicket(ticketId: string): Observable<any> {
        console.log("entered getOneTicket")
        return this.http.get(`${URL}/get/${ticketId}`);
    }
}
