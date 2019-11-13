import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'load-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  diameter = 40;

  constructor() { }

  ngOnInit() {
  }

}
