import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full'
    },
    {
        path: 'orders',
        component: OrdersComponent
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
export class OrdersRoutingModule {}
