import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DeviceModel } from './device-model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3001/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(
    private http: HttpClient
  ) { }

  addDevice(payload: DeviceModel): Observable<any> {
    return this.http.post(`${URL}/add`, payload);
  }

  updateDevice(payload: DeviceModel): Observable<any> {
    return this.http.patch(`${URL}/update`, payload);
  }

  removeDevice(payload: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: payload
    };

    return this.http.delete(`${URL}/delete`, httpOptions);
  }

  getAllDevices(): Observable<any> {
    return this.http.get(`${URL}/get`);
  }

  getOneDevice(deviceName: string): Observable<any> {
    const param = new HttpParams().set('_id', deviceName);
    return this.http.get(`${URL}/getRecord`, { params: param });
  }
}
