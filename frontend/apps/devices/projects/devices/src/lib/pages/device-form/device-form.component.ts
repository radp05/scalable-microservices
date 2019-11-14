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
  deviceName: string;
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
    if (this.route.snapshot.paramMap.get('deviceName')) {
      this.deviceName = this.route.snapshot.paramMap.get('deviceName');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Device';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit Device';
      }
      this.initFormOnUpdate();
    } else {
      this.initFormOnAddForm();
    }
  }

  initFormOnAddForm(): void {
    this.device = {
      deviceType: '',
      deviceName: '',
      deviceIp: ''
    }
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.devicesService.getOneDevice(this.deviceName).subscribe(res => {
      const data = res.data;
      this.device = {
        deviceType: data.deviceType,
        deviceName: data.deviceName,
        deviceIp: data.deviceIp
      };
    }, err => {
      this.snackbarService.error(err.message);
    }).add(() => {
      this.spinner();
    })
  }

  onClickDeviceBtn(): void {
    if (this.deviceName) {
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
