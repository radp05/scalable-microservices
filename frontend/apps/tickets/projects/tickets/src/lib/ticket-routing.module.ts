import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketFormComponent } from './pages/ticket-form/ticket-form.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'ticket',
        pathMatch: 'full',
        data: {
            breadcrumb: ''
        }
    },
    {
        path: 'tickets',
        component: TicketListComponent,
        data: {
            breadcrumb: 'Ticket'
        }
    },
    {
        path: 'add-tickets',
        component: TicketFormComponent,
        data: {
            breadcrumb: 'Add Ticket'
        }
    },
    {
        path: 'edit-tickets/:_id',
        component: TicketFormComponent,
        data: {
            breadcrumb: 'Edit Ticket'
        }
    },
    {
        path: 'view-tickets/:_id',
        component: TicketFormComponent,
        data: {
            breadcrumb: 'View Tickets'
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
export class TicketRoutingModule { }