import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient,
    private _zone: NgZone) { }

  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }


  fetchNotifications(userId: string) {
    return Observable.create(observer => {
      const eventSource = this.getEventSource(`http://localhost:3333/api/v1/notification/user/${userId}`);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };

    });
  }
}
