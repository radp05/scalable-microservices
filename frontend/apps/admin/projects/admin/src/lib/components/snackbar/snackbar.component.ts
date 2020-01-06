import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'lib-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

}
