import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles = [
    { text: 'Devices', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Orders', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Users', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Resources', cols: 1, rows: 1, color: '#DDBDF1' },
    { text: 'Resources', cols: 1, rows: 1, color: '#DDBDF1' },
    { text: 'Resources', cols: 1, rows: 1, color: '#DDBDF1' },
  ];
  breakpoint: number;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }



}
