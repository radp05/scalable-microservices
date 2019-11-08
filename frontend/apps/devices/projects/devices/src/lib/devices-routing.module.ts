import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceFormComponent } from './pages/device-form/device-form.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full'
    },
    {
        path: 'devices',
        component: DeviceListComponent
    },
    {
        path: 'device/add',
        component: DeviceFormComponent
    },
    {
        path: 'device/edit/:id',
        component: DeviceFormComponent
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
export class DevicesRoutingModule { }