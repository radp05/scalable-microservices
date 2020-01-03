import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceFormComponent } from './pages/device-form/device-form.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full',
        data: {
            breadcrumb: ''
        }
    },
    {
        path: 'devices',
        component: DeviceListComponent,
        data: {
            breadcrumb: 'Devices'
        }
    },
    {
        path: 'add-device',
        component: DeviceFormComponent,
        data: {
            breadcrumb: 'Add Device'
        }
    },
    {
        path: 'edit-device/:id',
        component: DeviceFormComponent,
        data: {
            breadcrumb: 'Edit Device'
        }
    },
    {
        path: 'view-device/:id',
        component: DeviceFormComponent,
        data: {
            breadcrumb: 'View Device'
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
export class DevicesRoutingModule { }