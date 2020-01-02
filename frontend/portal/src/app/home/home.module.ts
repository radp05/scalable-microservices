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

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    OrdersModule.forRoot(environment),
    DevicesModule.forRoot(environment),
    AdminModule.forRoot(environment),
    TicketingModule.forRoot(environment),
    FormbuilderModule.forRoot(environment)
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
