import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DeviceModel } from './device-model';
import { Observable } from 'rxjs';


@Injectable()
export class DevicesService {

  url: string;

  constructor(
      private http: HttpClient,
      @Inject('env') private env: any
  ) {
      this.url = `${this.env.apiEndPoint}${this.env.apis.device}`;
  }

  addDevice(payload: DeviceModel): Observable<any> {
    return this.http.post(`${this.url}/add`, payload);
  }

  updateDevice(payload: DeviceModel): Observable<any> {
    return this.http.patch(`${this.url}/update`, payload);
  }

  removeDevice(payload: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: payload
    };

    return this.http.delete(`${this.url}/delete`, httpOptions);
  }

  getAllDevices(): Observable<any> {
    return this.http.get(`${this.url}/get`);
  }

  getOneDevice(deviceName: string): Observable<any> {
    const param = new HttpParams().set('_id', deviceName);
    return this.http.get(`${this.url}/getRecord`, { params: param });
  }
}
