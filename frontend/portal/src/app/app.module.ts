import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DevicesModule } from 'devices';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersModule } from 'orders';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
import { AdminModule } from 'admin';
import { MdePopoverModule } from '@material-extended/mde';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    DevicesModule,
    AdminModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MdePopoverModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
