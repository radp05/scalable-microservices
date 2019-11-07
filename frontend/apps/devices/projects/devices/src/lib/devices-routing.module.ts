import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { NgModule } from '@angular/core';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full'
    },
    {
        path: 'devices',
        component: DevicesComponent
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
export class DevicesRoutingModule {}