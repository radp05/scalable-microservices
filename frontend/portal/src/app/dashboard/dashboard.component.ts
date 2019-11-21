import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../services/util.service';
import { MatSidenav } from '@angular/material';
import { slideToBottom } from '../shared/animation/animation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideToBottom()]
})
export class DashboardComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit() { }



}
