import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceListComponent } from './pages/device-list/device-list.component';
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
import { DeviceFormComponent } from './pages/device-form/device-form.component';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './components/spinner/spinner.module';

@NgModule({
  declarations: [
    DevicesComponent,
    DeviceListComponent,
    DeviceFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DevicesRoutingModule,
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
    MatSnackBarModule,
    SpinnerModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    SnackbarComponent
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
