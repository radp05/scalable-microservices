import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatDialog
} from '@angular/material';
import { SnackbarService } from '../../../services/snackbar.service';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { TicketingService } from '../ticketing.service';
import { TicketingModel } from '../ticketing.model';
import { routerTransition } from '../../../components/animation/animation.component';

@Component({
  selector: 'lib-ticketing',
  templateUrl: './ticketing-list.component.html',
  styleUrls: ['./ticketing-list.component.scss'],
  animations: [routerTransition()]
})
export class TicketingListComponent implements OnInit {

displayedColumnsKey: string[] = ['ticketId', 'reportedDate', 'title','ticketType','reportedBy','application','version','site','resolutionType','priority','status','releaseDate','Description'];
  displayCoulmnsLabel: any[] = [
    {
      TicketId: 'Ticket ID',
      reportedDate: 'Reported Date',
      title: 'Title',
      ticketType:'Ticket Type',
      reportedBy:'Reported By',
      application:'App',
      version:'Version',
      site:'Site',
      resolutionType:'Resolve Type',
      priority:'Priority',
      status:'Status',
      releaseDate:'Released Date',
      description:'Description'
    }
  ];
  dataSource: MatTableDataSource<TicketingModel>;
  beginProcess: boolean = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private ticketingService: TicketingService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataSource = null;
    this.ticketingService.getAllTickets().subscribe(res => {
      this.dataSource = res.data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackbarService.error(err);
    });
  }

  removeTicket(deviceId: string, actionIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { deviceId: deviceId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.spinner();
        this.deleteActionIndex = actionIndex;
        this.ticketingService.removeTicket(result).subscribe(() => {
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
