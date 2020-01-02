import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OrdersModule } from 'orders';
import { DevicesModule } from 'devices';
import { AdminModule } from 'admin';
import { TicketingModule } from 'tickets';
import { FormbuilderModule } from 'formbuilder';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    OrdersModule,
    DevicesModule,
    AdminModule,
    TicketingModule,
    FormbuilderModule
  ]
})
export class WrapperModule {}


@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
