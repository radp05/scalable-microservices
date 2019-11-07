import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [OrdersComponent],
  imports: [ OrdersRoutingModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
