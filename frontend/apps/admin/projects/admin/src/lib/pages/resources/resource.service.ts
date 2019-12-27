import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ResourceModel } from './resource.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3003/api/v1/admin';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {

    constructor(
        private http: HttpClient
    ) { }

    addResource(payload: ResourceModel): Observable<any> {
        return this.http.post(`${URL}/resources`, payload);
    }

    updateResource(payload: ResourceModel, resourceId: string): Observable<any> {
        return this.http.patch(`${URL}/resources/${resourceId}`, payload);
    }

    removeResource(resourceId: string): Observable<any> {
        return this.http.delete(`${URL}/resources/${resourceId}`);
    }

    getAllResources(): Observable<any> {
        return this.http.get(`${URL}/resources`);
    }

    getOneResource(resourceId: string): Observable<any> {
        return this.http.get(`${URL}/resources/${resourceId}`);
    }
}
