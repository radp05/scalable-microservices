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
  MatSnackBarModule,
  MAT_SNACK_BAR_DATA
} from '@angular/material';
import { DeviceFormComponent } from './pages/device-form/device-form.component';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './components/spinner/spinner.module';
import { CustomTooltipModule } from './components/custom-tooltip/custom-tooltip.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { SnackbarService } from './services/snackbar.service';
import { DevicesService } from './devices.service';

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
  exports: [DevicesComponent]
})
export class DevicesModule {
  static forRoot(env: any): ModuleWithProviders {
    return {
      ngModule: DevicesModule,
      providers: [
        { provide: 'env', useValue: env },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} },
        SnackbarService,
        DevicesService
      ]
    };
  }
}
