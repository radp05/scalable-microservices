import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../services/util.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit() {}



}
