import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatDialog
} from '@angular/material';
import { SnackbarService } from '../../../services/snackbar.service';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { ResourceService } from '../resource.service';
import { ResourceModel } from '../resource.model';
import { routerTransition } from '../../../components/animation/animation.component';

@Component({
  selector: 'lib-resource',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
  animations: [routerTransition()]
})
export class ResourceListComponent implements OnInit {

  displayedColumnsKey: string[] = ['position', 'resourceName', 'action'];
  displayCoulmnsLabel: any[] = [
    {
      resourceName: 'Resource Name'
    }
  ];
  dataSource: MatTableDataSource<ResourceModel>;
  beginProcess: boolean = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataSource = null;
    this.resourceService.getAllResources().subscribe(res => {
      this.dataSource = res.data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackbarService.error(err);
    });
  }

  deleteResource(deviceId: string, actionIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { deviceId: deviceId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.spinner();
        this.deleteActionIndex = actionIndex;
        this.resourceService.removeResource(result).subscribe(() => {
          this.getData();
        }, err => {
          this.snackbarService.error(err);
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
