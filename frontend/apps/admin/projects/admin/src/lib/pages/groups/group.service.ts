import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GroupModel } from './group.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3001/devices';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(
        private http: HttpClient
    ) { }

    addGroup(payload: GroupModel): Observable<any> {
        return this.http.post(`${URL}/add`, payload);
    }

    updateGroup(payload: GroupModel): Observable<any> {
        return this.http.patch(`${URL}/update`, payload);
    }

    removeGroup(payload: object): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: payload
        };

        return this.http.delete(`${URL}/delete`, httpOptions);
    }

    getAllGroups(): Observable<any> {
        return this.http.get(`${URL}/get`);
    }

    getOneGroup(deviceName: string): Observable<any> {
        const param = new HttpParams().set('deviceName', deviceName);
        return this.http.get(`${URL}/getRecord`, { params: param });
    }
}
