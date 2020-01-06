import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

    url: string;
    constructor(
        private http: HttpClient,
        @Inject('env') private env: any
    ) {
        this.url = `${this.env.apiEndPoint}${this.env.apis.admin}`;
        console.log(this.url);
    }

    addUser(payload: UserModel): Observable<any> {
        return this.http.post(`${this.url}/users`, payload);
    }

    updateUser(payload: UserModel, userId: string): Observable<any> {
        return this.http.patch(`${this.url}/users/${userId}`, payload);
    }

    removeUser(userId: string): Observable<any> {
        return this.http.delete(`${this.url}/users/${userId}`);
    }

    getAllUser(): Observable<any> {
        return this.http.get(`${this.url}/users`);
    }

    getOneUser(userId: string): Observable<any> {
        return this.http.get(`${this.url}/users/${userId}`);
    }
}
