import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable()
export class SnackbarService {

  durationInSeconds = 5;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  success(successMessage: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: successMessage,
      panelClass: ['success-response']
    });
  }

  error(errorMessage: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMessage,
      panelClass: ['error-response']
    });
  }
}
