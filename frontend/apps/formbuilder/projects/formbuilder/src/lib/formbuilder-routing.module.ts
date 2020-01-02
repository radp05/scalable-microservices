import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplatesComponent } from './admin-templates/admin-templates.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { UserTemplatesComponent } from './user-templates/user-templates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES: Routes = [
    {
        path: 'form-builder',
        component: AdminTemplatesComponent,
        data: {
            breadcrumb: 'Form Builder'
        }
    },
    {
        path: 'add-templates',
        component: EditAppComponent,
        data: {
            breadcrumb: 'Admin Templates'
        }
    },
    {
        path: 'user-template',
        component: UserTemplatesComponent, data: {
            breadcrumb: 'User Templates'
        }
    },
    {
        path: 'admin-templates',
        component: AdminTemplatesComponent, data: {
            breadcrumb: 'Admin Templates'
        }
    },
    {
        path: '',
        redirectTo: 'form-builder',
        pathMatch: 'full'
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
export class FormbuilderRoutingModule { }


