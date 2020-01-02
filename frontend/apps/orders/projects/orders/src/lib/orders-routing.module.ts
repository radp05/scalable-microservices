import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
        data: {
            breadcrumb: ''
        }
    },
    {
        path: 'orders',
        component: OrderListComponent,
        data: {
            breadcrumb: 'Orders'
        }
    },
    {
        path: 'add-order',
        component: OrderFormComponent,
        data: {
            breadcrumb: 'Add Order'
        }
    },
    {
        path: 'edit-order/:id',
        component: OrderFormComponent,
        data: {
            breadcrumb: 'Edit Order'
        }
    },
    {
        path: 'view-order/:id',
        component: OrderFormComponent,
        data: {
            breadcrumb: 'View Order'
        }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class OrdersRoutingModule { }
