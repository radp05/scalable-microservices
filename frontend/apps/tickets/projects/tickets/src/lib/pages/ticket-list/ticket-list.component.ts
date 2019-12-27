import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { TicketService } from '../../ticket.service';
import { SnackbarService } from '../../services/snackbar.service';
import { routerTransition } from '../../components/animation/animation.component';

@Component({
  selector: 'lib-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  animations: [routerTransition()]
})
export class TicketListComponent implements OnInit {
  ticketId: string;
  
  displayedColumnsKey: string[] = ['ticketId', 'reportedDate', 'title', 'ticketType', 'reportedBy','application','version','site','resolutionType','priority','status','releaseDate','description'];
  displayCoulmnsLabel: any[] = [
    {
      ticketId: 'Ticket Id'
    },
    {
      reportedDate: 'Reported Date'
    },
    {
      title: 'Title'
    },
    {
      ticketType: 'Ticket Type'
    },
    {
      reportedBy: 'Reported By'
    },
    {
      application: 'Application'
    },
    {
      version: 'Version'
    },
    {
      site: 'Site'
    },
    {
      resolutionType: 'Resolution Type'
    },
    {
      priority: 'Priority'
    },
    {
      status: 'Status'
    },
    {
      releaseDate: 'Release Date'
    },
    {
      description: 'Description'
    }
  ];
  dataSource: MatTableDataSource<DataResponse>;
  beginProcess: boolean = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private ticketService: TicketService,
    private snackbarService: SnackbarService
  ) {
    this.getData();
  }

  ngOnInit() {

  }

  getData(): void {
    this.dataSource = null;
    this.ticketService.getAllTickets().subscribe(res => {
      console.log('??res', res);
      this.dataSource = res.data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackbarService.error(err.message);
    });
  }

  deleteTicket(ticketId: string, actionIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { ticketId: ticketId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.spinner();
        this.deleteActionIndex = actionIndex;
        this.ticketService.removeTicket({ _id: result }).subscribe(() => {
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
  ticketId: string;
  deviceType: number;
  deviceIp: number;
}
