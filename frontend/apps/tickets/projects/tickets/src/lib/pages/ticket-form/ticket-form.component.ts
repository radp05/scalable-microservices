import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../ticket.service';
import { TicketModel } from '../../ticket-model';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../../services/snackbar.service';
import { ipAddressPattern } from '../../regex-pattern';
import { routerTransition } from '../../components/animation/animation.component';

@Component({
  selector: 'lib-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  animations: [routerTransition()]
})
export class TicketFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add Ticket';
  ticketId: string;
  ticket: TicketModel = {
    ticketId: '',
    reportedDate: new Date(),
    title: '',
    ticketType: '',
    reportedBy:'',
    application:'',
    version:'',
    site:'',
    resolutionType:'',
    priority:'',
    status:'',
    releaseDate:new Date(),
    description:''
  };
  beginProcess: boolean = false;
  isViewForm: boolean = false;
  ipAddressRegx: RegExp = ipAddressPattern;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('ticketId')) {
      this.ticketId = this.route.snapshot.paramMap.get('ticketId');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Ticket';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit Ticket';
      }
      this.initFormOnUpdate();
    }
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.ticketService.getOneTicket(this.ticketId).subscribe(res => {
      const data = res.data;
     
        ticketId: data.ticketId;
    reportedDate: data.reportedDate;
    title: data.title;
    ticketType: data.ticketType;
    reportedBy:data.reportedBy;
    application:data.application;
    version:data.version;
    site:data.site;
    resolutionType:data.resolutionType;
    priority:data.priority;
    status:data.status;
    releaseDate:data.releaseDate;
    description:data.description;
  
    }, err => {
      this.snackbarService.error(err.message);
    }).add(() => {
      this.spinner();
    })
  }

  onClickTicketBtn(): void {
    console.log("onClickTicketBtn "+this.ticket)
    if (this.ticket) {
      // Update ticket service
      this.updateTicket();
    } else {
      // Add ticket service
      this.addTicket();
    }
  }

  addTicket(): void {
    this.spinner();
    const payload: TicketModel = this.ticket;
    console.log("payload :: "+payload)
    this.ticketService.addTicket(payload).subscribe(res => {
      console.log('res', res);
      this.snackbarService.success('Successfully added');
      this.router.navigate(['/ticket']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err.message);
    }).add(() => {
      this.spinner();
    });
  }

  updateTicket(): void {
    const payload: TicketModel = this.ticket;
    console.log('???payload', payload);
    this.ticketService.updateTicket(payload).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['/ticket']);
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
