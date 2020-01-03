import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ResourceFormComponent } from './pages/resources/resource-form/resource-form.component';
import { ResourceListComponent } from './pages/resources/resource-list/resource-list.component';

import { TicketingFormComponent } from './pages/ticketing/ticketing-form/ticketing-form.component';
import { TicketingListComponent } from './pages/ticketing/ticketing-list/ticketing-list.component';


import { GroupListComponent } from './pages/groups/group-list/group-list.component';
import { GroupFormComponent } from './pages/groups/group-form/group-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';

const ROUTES: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        data: {
            breadcrumb: 'Admin'
        },
    },

    /***********************************/
    {
        path: 'resources',
        component: ResourceListComponent,
        data: {
            breadcrumb: 'Resources'
        }
    },
    {
        path: 'resources-add',
        component: ResourceFormComponent,
        data: {
            breadcrumb: 'Add Resource'
        }
    },
    {
        path: 'resources-edit/:id',
        component: ResourceFormComponent,
        data: {
            breadcrumb: 'Edit Resource'
        }
    },
    {
        path: 'resources-view/:id',
        component: ResourceFormComponent,
        data: {
            breadcrumb: 'View Resource'
        }
    },
    /*********************************** */
    {
        path: 'ticket',
        component: TicketingListComponent,
        data: {
            breadcrumb: 'Ticketing'
        }
    },
    {
        path: 'add-ticket',
        component: TicketingFormComponent,
        data: {
            breadcrumb: 'Add Ticket'
        }
    },
    {
        path: 'edit-ticket/:ticketId',
        component: TicketingFormComponent,
        data: {
            breadcrumb: 'Edit Resource'
        }
    },
    {
        path: 'view-ticket/:ticketId',
        component: TicketingFormComponent,
        data: {
            breadcrumb: 'View Ticket'
        }
    },
    /*********************************** */
    {
        path: 'groups',
        component: GroupListComponent,
        data: {
            breadcrumb: 'Groups'
        }
    },
    {
        path: 'add-group',
        component: GroupFormComponent,
        data: {
            breadcrumb: 'Add Group'
        }
    },
    {
        path: 'edit-group/:id',
        component: GroupFormComponent,
        data: {
            breadcrumb: 'Edit Group'
        }
    },
    {
        path: 'view-group/:id',
        component: GroupFormComponent,
        data: {
            breadcrumb: 'View Group'
        }
    },
    /*********************************** */
    {
        path: 'users',
        component: UserListComponent,
        data: {
            breadcrumb: 'Users'
        }
    },
    {
        path: 'add-user',
        component: UserFormComponent,
        data: {
            breadcrumb: 'Add User'
        }
    },
    {
        path: 'edit-user/:id',
        component: UserFormComponent,
        data: {
            breadcrumb: 'Edit User'
        }
    },
    {
        path: 'view-user/:id',
        component: UserFormComponent,
        data: {
            breadcrumb: 'View User'
        }
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
export class AdminRoutingModule { }