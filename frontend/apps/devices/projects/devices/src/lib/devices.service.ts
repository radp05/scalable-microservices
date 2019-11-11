import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceModel } from './device-model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(
    private http: HttpClient
  ) { }

  addDevice(payload: DeviceModel): Observable<any> {
    return this.http.post(`${URL}/device/add`, payload);
  }

  updateDevice(payload: DeviceModel): Observable<any> {
    return this.http.put(`${URL}/device/update`, payload);
  }

  removeDevice(payload: string): Observable<any> {
    return this.http.put(`${URL}/device/remove`, payload);
  }

  getAllDevices(): Observable<any> {
    return this.http.get(`${URL}/device/all`);
  }
}
