import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { HttpErrorResponse } from '@angular/common/http';

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

  error(error: HttpErrorResponse) {
    let message: string;
    if (error.error) {
      message = error.error.message;
    } else {
      message = error.message;
    }
    if (typeof message !== 'string') {
      message = 'Something went wrong!';
    }
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: message,
      panelClass: ['error-response']
    });
  }
}
