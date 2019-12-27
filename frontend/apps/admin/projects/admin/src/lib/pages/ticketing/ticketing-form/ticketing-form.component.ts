import { Component, OnInit } from '@angular/core';
import { TicketingModel } from '../ticketing.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketingService } from '../ticketing.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { scaleTransition } from '../../../components/animation/animation.component';

@Component({
  selector: 'lib-ticketing-form',
  templateUrl: './ticketing-form.component.html',
  styleUrls: ['./ticketing-form.component.scss'],
  animations: [scaleTransition()]
})
export class TicketingFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add Ticket';
  ticketingId: string;
  ticketing: TicketingModel = {
    ticketId: '',
    reportedDate: new Date(),
    title: '',
    ticketType:'',
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketingService: TicketingService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.ticketingId = this.route.snapshot.paramMap.get('id');
      const url = this.router.url;
      console.log("Entered url"+url)
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Tickets';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit Ticket';
      }
      this.initFormOnUpdate();
    }
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.ticketingService.getOneTicket(this.ticketing.ticketId).subscribe(res => {
      const data = res.data;
      this.ticketing = {
        ticketId: '',
        reportedDate: new Date(),
        title: '',
        ticketType:'',
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
    }, err => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    })
  }

  onClickTicketBtn(): void {
    console.log("Is it true or false"+this.ticketing)
    if (this.ticketing) {
      // Update ticketing service
      this.updateTicket();
    } else {
      console.log("Entered else block")
      // Add ticketing service
      this.addTicket();
    }
  }

  addTicket(): void {
    console.log("Entered addTicket frontend")
    this.spinner();
    const payload: TicketingModel = this.ticketing;
    this.ticketingService.addTicket(payload).subscribe(res => {
      this.snackbarService.success('Successfully added');
      this.router.navigate(['/admin/ticketing']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    });
  }

  updateTicket(): void {
    console.log("Entered updateTicket frontend")
    const payload: TicketingModel = this.ticketing;
    this.ticketingService.updateTicket(payload, this.ticketing.ticketId).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['/admin/ticketing']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err);
    }, () => {
      this.spinner();
    });
  }

  spinner(): void {
    this.beginProcess = !this.beginProcess;
  }

}
