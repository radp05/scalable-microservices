import { NgModule, ModuleWithProviders } from '@angular/core';
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
  MatSelectModule,
  MAT_SNACK_BAR_DATA
} from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { ResourceListComponent } from './pages/resources/resource-list/resource-list.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ResourceFormComponent } from './pages/resources/resource-form/resource-form.component';
import { GroupListComponent } from './pages/groups/group-list/group-list.component';
import { GroupFormComponent } from './pages/groups/group-form/group-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { CustomTooltipModule } from './components/custom-tooltip/custom-tooltip.module';
import { TicketingFormComponent } from './pages/ticketing/ticketing-form/ticketing-form.component';
import { TicketingListComponent } from './pages/ticketing/ticketing-list/ticketing-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupService } from './pages/groups/group.service';
import { ResourceService } from './pages/resources/resource.service';
import { TicketingService } from './pages/ticketing/ticketing.service';
import { UserService } from './pages/users/user.service';
import { SnackbarService } from './services/snackbar.service';


@NgModule({
  declarations: [
    AdminComponent,
    ResourceListComponent,
    ResourceFormComponent,
    TicketingListComponent,
    TicketingFormComponent,
    GroupListComponent,
    GroupFormComponent,
    UserListComponent,
    UserFormComponent,
    SnackbarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SpinnerModule,
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
export class AdminModule {
  static forRoot(env: any): ModuleWithProviders {
    return {
      ngModule: AdminModule,
      providers: [
        { provide: 'env', useValue: env },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} },
        SnackbarService,
        GroupService,
        ResourceService,
        TicketingService,
        UserService
      ]
    };
  }
}
