import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupModel } from './group.model';
import { Observable } from 'rxjs';


@Injectable()
export class GroupService {

    url: string;

    constructor(
        private http: HttpClient,
        @Inject('env') private env: any
    ) {
        this.url = `${this.env.apiEndPoint}${this.env.apis.admin}`;
    }

    addGroup(payload: GroupModel): Observable<any> {
        return this.http.post(`${this.url}/groups`, payload);
    }

    updateGroup(payload: GroupModel, groupId: string): Observable<any> {
        return this.http.patch(`${this.url}/groups/${groupId}`, payload);
    }

    removeGroup(groupId: string): Observable<any> {
        return this.http.delete(`${this.url}/groups/${groupId}`);
    }

    getAllGroups(): Observable<any> {
        return this.http.get(`${this.url}/groups`);
    }

    getOneGroup(groupId: string): Observable<any> {
        return this.http.get(`${this.url}/groups/${groupId}`);
    }
}
