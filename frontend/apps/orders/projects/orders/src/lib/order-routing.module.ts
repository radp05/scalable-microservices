import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';

const ROUTES: Routes = [
  {
      path: '',
      redirectTo: 'orders',
      pathMatch: 'full'
  },
  {
      path: 'orders',
      component: OrderListComponent
  },
  {
      path: 'order/add',
      component: OrderFormComponent
  },
  {
      path: 'order/edit/:id',
      component: OrderFormComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(ROUTES)
  ],
  exports: [
      RouterModule
  ]
})
export class OrderRoutingModule { }
