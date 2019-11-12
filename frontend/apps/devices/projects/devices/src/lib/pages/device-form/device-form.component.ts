import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../../devices.service';
import { DeviceModel } from '../../device-model';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'lib-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add Device';
  deviceId: string;
  device: DeviceModel = {
    type: '',
    name: '',
    ipAddress: ''
  };
  durationInSeconds = 5;

  constructor(
    private route: ActivatedRoute,
    private devicesService: DevicesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.deviceId = this.route.snapshot.paramMap.get('id');
      this.btnLabel = 'Update'
      this.formLabel = 'Edit Device';
    }
  }

  onClickDeviceBtn(): void {
    if (this.deviceId) {
      // Update device service
      this.updateDevice();
    } else {
      // Add device service
      this.addDevice();
    }
  }

  addDevice(): void {
    const payload: DeviceModel = this.device;
    this.devicesService.addDevice(payload).subscribe(res => {

    }, (err: HttpErrorResponse) => {
      this.openSnackBar(err.message);
    });
  }

  updateDevice(): void {
    const payload: DeviceModel = this.device;
    this.devicesService.updateDevice(payload).subscribe(res => {

    }, (err: HttpErrorResponse) => {
      this.openSnackBar(err.message);
    });
  }

  openSnackBar(errorMessage: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMessage
    });
  }

}
