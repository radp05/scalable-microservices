import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ResourceModel } from './resource.model';
import { Observable } from 'rxjs';


@Injectable()
export class ResourceService {

    url: string;

    constructor(
        private http: HttpClient,
        @Inject('env') private env: any
    ) {
        this.url = `${this.env.apiEndPoint}${this.env.apis.admin}`;
    }

    addResource(payload: ResourceModel): Observable<any> {
        return this.http.post(`${this.url}/resources`, payload);
    }

    updateResource(payload: ResourceModel, resourceId: string): Observable<any> {
        return this.http.patch(`${this.url}/resources/${resourceId}`, payload);
    }

    removeResource(resourceId: string): Observable<any> {
        return this.http.delete(`${this.url}/resources/${resourceId}`);
    }

    getAllResources(): Observable<any> {
        return this.http.get(`${this.url}/resources`);
    }

    getOneResource(resourceId: string): Observable<any> {
        return this.http.get(`${this.url}/resources/${resourceId}`);
    }
}
