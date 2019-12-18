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
        path: 'ticket',
        component: TicketListComponent,
        data: {
            breadcrumb: 'Ticket'
        }
    },
    {
        path: 'ticket/add',
        component: TicketFormComponent,
        data: {
            breadcrumb: 'Add Ticket'
        }
    },
    {
        path: 'ticket/edit/:_id',
        component: TicketFormComponent,
        data: {
            breadcrumb: 'Edit Ticket'
        }
    },
    {
        path: 'ticket/view/:_id',
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