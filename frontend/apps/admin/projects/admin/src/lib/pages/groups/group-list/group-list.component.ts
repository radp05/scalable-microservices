import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatDialog
} from '@angular/material';
import { SnackbarService } from '../../../services/snackbar.service';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { GroupService } from '../group.service';
import { GroupModel } from '../group.model';

@Component({
  selector: 'lib-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  displayedColumnsKey: string[] = ['position', 'groupName', 'resourceIds', 'action'];
  displayCoulmnsLabel: any[] = [
    {
      groupName: 'Group Name'
    },
    {
      resourceIds: 'Resources'
    }
  ];
  dataSource: any;
  // dataSource: MatTableDataSource<GroupModel>;
  beginProcess: boolean = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const data: GroupModel[] = [
      {
        groupName: 'Group 1',
        resourceIds: ['kassidd1234', 'kassidd98283']
      },
      {
        groupName: 'Group 2',
        resourceIds: ['kassidd1234']
      },
      {
        groupName: 'Group 3',
        resourceIds: ['kassidd1234', 'kassidd98283', 'kosdhdg7364']
      },
      {
        groupName: 'Group 4',
        resourceIds: ['kassidd1234', 'kassidd98283']
      }
    ];
    this.dataSource = data;;
    this.dataSource.paginator = this.paginator;
    // this.devicesService.getAllDevices().subscribe(res => {
    //   console.log('??res', res);
    //   this.dataSource = res.data;
    //   this.dataSource.paginator = this.paginator;
    // }, err => {
    //   this.snackbarService.error(err);
    // });
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
        this.groupService.removeGroup({ _id: result }).subscribe(() => {
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
