import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatPaginatorModule } from '@angular/material';

//modules - material

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [OrdersComponent],
  imports: [ OrdersRoutingModule , MatTableModule , MatPaginatorModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
