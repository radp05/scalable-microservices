import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
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
  MatDatepickerModule, MatNativeDateModule, MAT_SNACK_BAR_DATA
} from '@angular/material';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './components/spinner/spinner.module';
import { CustomTooltipModule } from './components/custom-tooltip/custom-tooltip.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarService } from './services/snackbar.service';
import { OrdersService } from './orders.service';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderFormComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OrdersRoutingModule ,
    ConfirmDialogModule,
    CustomTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
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
  exports: [OrdersComponent]
})
export class OrdersModule {
  static forRoot(env: any): ModuleWithProviders {
    return {
      ngModule: OrdersModule,
      providers: [
        { provide: 'env', useValue: env },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} },
        SnackbarService,
        OrdersService
      ]
    };
  }
}
