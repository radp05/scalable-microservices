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
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
        data: {
            breadcrumb: ''
        }
    },
    {
        path: 'admin',
        data: {
            breadcrumb: 'Admin'
        },
        children: [
            {
                path: '',
                component: AdminComponent,
                data: {
                    breadcrumb: 'Admin'
                }
            },
            {
                path: 'resources',
                data: {
                    breadcrumb: 'Resources'
                },
                children: [
                    {
                        path: '',
                        component: ResourceListComponent,
                        data: {
                            breadcrumb: 'Resources'
                        }
                    },
                    {
                        path: 'add',
                        component: ResourceFormComponent,
                        data: {
                            breadcrumb: 'Add Resource'
                        }
                    },
                    {
                        path: 'edit/:id',
                        component: ResourceFormComponent,
                        data: {
                            breadcrumb: 'Edit Resource'
                        }
                    },
                    {
                        path: 'view/:id',
                        component: ResourceFormComponent,
                        data: {
                            breadcrumb: 'View Resource'
                        }
                    }
                ]
            },
            {
                path: 'ticketing',
                data: {
                    breadcrumb: 'Ticketing'
                },
                children: [
                    {
                        path: 'ticket/add',
                        component: TicketingFormComponent,
                        data: {
                            breadcrumb: 'Add Ticket'
                        }
                    },{
                        path: '',
                        component: TicketingListComponent,
                        data: {
                            breadcrumb: 'Ticketing'
                        }
                    },
                    {
                        path: 'ticket/edit/:ticketId',
                        component: TicketingFormComponent,
                        data: {
                            breadcrumb: 'Edit Resource'
                        }
                    },
                    {
                        path: 'ticket/view/:ticketId',
                        component: TicketingFormComponent,
                        data: {
                            breadcrumb: 'View Ticket'
                        }
                    }
                ]
            },
            {
                path: 'groups',
                data: {
                    breadcrumb: 'Groups'
                },
                children: [
                    {
                        path: '',
                        component: GroupListComponent,
                        data: {
                            breadcrumb: 'Groups'
                        }
                    },
                    {
                        path: 'add',
                        component: GroupFormComponent,
                        data: {
                            breadcrumb: 'Add Group'
                        }
                    },
                    {
                        path: 'edit/:id',
                        component: GroupFormComponent,
                        data: {
                            breadcrumb: 'Edit Group'
                        }
                    },
                    {
                        path: 'view/:id',
                        component: GroupFormComponent,
                        data: {
                            breadcrumb: 'View Group'
                        }
                    }
                ]
            },
            {
                path: 'users',
                data: {
                    breadcrumb: 'Users'
                },
                children: [
                    {
                        path: '',
                        component: UserListComponent,
                        data: {
                            breadcrumb: 'Users'
                        }
                    },
                    {
                        path: 'add',
                        component: UserFormComponent,
                        data: {
                            breadcrumb: 'Add User'
                        }
                    },
                    {
                        path: 'edit/:id',
                        component: UserFormComponent,
                        data: {
                            breadcrumb: 'Edit User'
                        }
                    },
                    {
                        path: 'view/:id',
                        component: UserFormComponent,
                        data: {
                            breadcrumb: 'View User'
                        }
                    }
                ]
            }
        ]
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