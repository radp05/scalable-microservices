import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { ResourceListComponent } from './pages/resources/resource-list/resource-list.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { SpinnerModule } from './components/spinner/spinner.module';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ResourceFormComponent } from './pages/resources/resource-form/resource-form.component';
import { FormsModule } from '@angular/forms';
import { GroupListComponent } from './pages/groups/group-list/group-list.component';
import { GroupFormComponent } from './pages/groups/group-form/group-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { CustomTooltipModule } from './components/custom-tooltip/custom-tooltip.module';

@NgModule({
  declarations: [
    AdminComponent,
    ResourceListComponent,
    ResourceFormComponent,
    GroupListComponent,
    GroupFormComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AdminRoutingModule,
    SnackbarModule,
    SpinnerModule,
    ConfirmDialogModule,
    CustomTooltipModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    SnackbarComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
