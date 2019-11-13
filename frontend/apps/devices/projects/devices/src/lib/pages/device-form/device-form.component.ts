import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../../devices.service';
import { DeviceModel } from '../../device-model';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'lib-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add Device';
  deviceId: string;
  device: DeviceModel;
  beginProcess: boolean = false;
  isViewForm: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private devicesService: DevicesService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.deviceId = this.route.snapshot.paramMap.get('id');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Device';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit Device';
      }
      this.initForm();
    } else {
      this.initForm();
    }
  }

  initForm(): void {
    this.device = {
      deviceType: '',
      deviceName: '',
      deviceIP: ''
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
    this.spinner();
    const payload: DeviceModel = this.device;
    this.devicesService.addDevice(payload).subscribe(res => {
      console.log('res', res);
      this.snackbarService.success('Successfully added');
      this.router.navigate(['/devices']);
      this.device
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err.message);
    }).add(() => {
      this.spinner();
    });
  }

  updateDevice(): void {
    const payload: DeviceModel = this.device;
    this.devicesService.updateDevice(payload).subscribe(res => {

    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err.message);
    }, () => {
      this.spinner();
    });
  }

  spinner(): void {
    this.beginProcess = !this.beginProcess;
  }

}
