import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplatesComponent } from './admin-templates/admin-templates.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { UserTemplatesComponent } from './user-templates/user-templates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES: Routes = [
    { path: "", component: AdminTemplatesComponent },
    { path: "admin-templates/add", component: EditAppComponent },
    { path: "user-template", component: UserTemplatesComponent },
    { path: "admin-templates", component: AdminTemplatesComponent },
    { path: "**", component: PageNotFoundComponent }
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


