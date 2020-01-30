import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) { }

  fetchNotifications(userId: string) {
    return this.http.get(`http://localhost:3333/${environment.apis.notification}/${userId}`);
  }

}
