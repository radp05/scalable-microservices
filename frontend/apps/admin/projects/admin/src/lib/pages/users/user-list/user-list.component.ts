import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatDialog
} from '@angular/material';
import { SnackbarService } from '../../../services/snackbar.service';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'lib-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumnsKey: string[] = ['position', 'groupName', 'resourceDetails', 'action'];
  displayCoulmnsLabel: any[] = [
    {
      groupName: 'Group Name'
    },
    {
      resourceDetails: 'Resources'
    }
  ];
  dataSource: MatTableDataSource<UserModel>;
  beginProcess: boolean = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataSource = null;
    this.userService.getAllGroups().subscribe(res => {
      this.dataSource = res.data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackbarService.error(err);
    });
  }

  deleteGroup(deviceId: string, actionIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { deviceId: deviceId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.spinner();
        this.deleteActionIndex = actionIndex;
        this.userService.removeGroup(result).subscribe(() => {
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
