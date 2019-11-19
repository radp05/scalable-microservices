import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ResourceFormComponent } from './pages/resources/resource-form/resource-form.component';
import { ResourceListComponent } from './pages/resources/resource-list/resource-list.component';
import { GroupListComponent } from './pages/groups/group-list/group-list.component';
import { GroupFormComponent } from './pages/groups/group-form/group-form.component';

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