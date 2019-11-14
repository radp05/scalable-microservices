import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { DevicesService } from '../../devices.service';
import { SnackbarService } from '../../services/snackbar.service';



@Component({
  selector: 'lib-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  displayedColumnsKey: string[] = ['position', 'deviceName', 'deviceType', 'deviceIp', 'action'];
  displayCoulmnsLabel: any[] = [
    {
      deviceName: 'Device Name'
    },
    {
      deviceType: 'Device Type'
    },
    {
      deviceIp: 'IP Address'
    }
  ];
  dataSource: MatTableDataSource<DataResponse>;
  beginProcess: boolean = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private devicesService: DevicesService,
    private snackbarService: SnackbarService
  ) {
    this.getData();
  }

  ngOnInit() {

  }

  getData(): void {
    this.devicesService.getAllDevices().subscribe(res => {
      console.log('??res', res);
      this.dataSource = res.data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackbarService.error(err.message);
    });
  }

  deleteDevice(deviceId: string, actionIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { deviceId: deviceId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.spinner();
        this.deleteActionIndex = actionIndex;
        this.devicesService.removeDevice({ _id: result }).subscribe(() => {
          this.getData();
        }, err => {
          this.snackbarService.error(err.message);
        }).add(() => {
          this.spinner();
        });
      }
    });
  }

  spinner(): void {
    this.beginProcess = !this.beginProcess;
  }

}

export interface DataResponse {
  deviceName: string;
  deviceType: number;
  deviceIp: number;
}
