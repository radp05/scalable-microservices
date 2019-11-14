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
        path: 'device/add',
        component: DeviceFormComponent,
        data: {
            breadcrumb: 'Add Device'
        }
    },
    {
        path: 'device/edit/:deviceName',
        component: DeviceFormComponent,
        data: {
            breadcrumb: 'Edit Device'
        }
    },
    {
        path: 'device/view/:deviceName',
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