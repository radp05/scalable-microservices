import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GroupModel } from './group.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3003/api/v1';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(
        private http: HttpClient
    ) { }

    addGroup(payload: GroupModel): Observable<any> {
        return this.http.post(`${URL}/groups`, payload);
    }

    updateGroup(payload: GroupModel, groupId: string): Observable<any> {
        return this.http.patch(`${URL}/groups/${groupId}`, payload);
    }

    removeGroup(groupId: string): Observable<any> {
        return this.http.delete(`${URL}/groups/${groupId}`);
    }

    getAllGroups(): Observable<any> {
        return this.http.get(`${URL}/groups`);
    }

    getOneGroup(groupId: string): Observable<any> {
        return this.http.get(`${URL}/groups/${groupId}`);
    }
}
