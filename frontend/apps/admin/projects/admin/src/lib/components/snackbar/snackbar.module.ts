import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [SnackbarComponent]
})
export class SnackbarModule { }
