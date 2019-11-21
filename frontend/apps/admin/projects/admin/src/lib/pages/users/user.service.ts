import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3003/api/v1';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    addUser(payload: UserModel): Observable<any> {
        return this.http.post(`${URL}/users`, payload);
    }

    updateUser(payload: UserModel, userId: string): Observable<any> {
        return this.http.patch(`${URL}/users/${userId}`, payload);
    }

    removeUser(userId: string): Observable<any> {
        return this.http.delete(`${URL}/users/${userId}`);
    }

    getAllUser(): Observable<any> {
        return this.http.get(`${URL}/users`);
    }

    getOneUser(userId: string): Observable<any> {
        return this.http.get(`${URL}/users/${userId}`);
    }
}
