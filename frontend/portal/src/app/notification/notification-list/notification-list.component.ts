import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NotificationService } from '../notification.service';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['message', 'status'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.fetchNotification();
  }

  fetchNotification() {
    const userId = '123123';
    this.notificationService.fetchNotifications(userId)
    .subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<any>([...response.data.notifications]);
      this.dataSource.paginator = this.paginator;
    });
  }

}

