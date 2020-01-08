import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './ticket.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DATA
} from '@angular/material';
import { TicketFormComponent } from './pages/ticket-form/ticket-form.component';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './components/spinner/spinner.module';
import { CustomTooltipModule } from './components/custom-tooltip/custom-tooltip.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { TicketService } from './ticket.service';
import { SnackbarService } from './services/snackbar.service';


@NgModule({
  declarations: [
    TicketComponent,
    TicketListComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TicketRoutingModule,
    ConfirmDialogModule,
    CustomTooltipModule,
    SnackbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    SpinnerModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    SnackbarComponent
  ],
  exports: [TicketComponent]
})
export class TicketingModule { 
  static forRoot(env: any): ModuleWithProviders {
    return {
      ngModule: TicketingModule,
      providers: [
        { provide: 'env', useValue: env },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} },
        SnackbarService,
        TicketService
      ]
    };
  }
}
