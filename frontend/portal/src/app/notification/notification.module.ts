import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [NotificationListComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    NotificationService
  ]
})
export class NotificationModule { }
