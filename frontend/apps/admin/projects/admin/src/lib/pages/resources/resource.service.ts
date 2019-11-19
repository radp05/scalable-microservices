import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ResourceModel } from './resource.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3001/devices';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {

    constructor(
        private http: HttpClient
    ) { }

    addResource(payload: ResourceModel): Observable<any> {
        return this.http.post(`${URL}/add`, payload);
    }

    updateResource(payload: ResourceModel): Observable<any> {
        return this.http.patch(`${URL}/update`, payload);
    }

    removeResource(payload: object): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: payload
        };

        return this.http.delete(`${URL}/delete`, httpOptions);
    }

    getAllResources(): Observable<any> {
        return this.http.get(`${URL}/get`);
    }

    getOneResource(deviceName: string): Observable<any> {
        const param = new HttpParams().set('deviceName', deviceName);
        return this.http.get(`${URL}/getRecord`, { params: param });
    }
}
