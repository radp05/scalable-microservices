import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { OrderRoutingModule } from './order-routing.module';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { SnackbarModule } from './components/snackbar/snackbar.module';

@NgModule({
  declarations: [OrdersComponent, OrderListComponent, OrderFormComponent],
  imports: [
    OrderRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    SnackbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
