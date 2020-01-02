
import { NgModule } from '@angular/core';
import { FormbuilderRoutingModule } from './formbuilder-routing.module';
import { UserTemplatesComponent } from './user-templates/user-templates.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatTableModule,
  MatCheckboxModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTooltipModule,
  MatIconModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatTreeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatMenuModule,
  MatPaginatorModule
} from '@angular/material';
import { AdminTemplatesComponent } from './admin-templates/admin-templates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormbuilderComponent } from './formbuilder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormbuilderComponent,
    UserTemplatesComponent,
    EditAppComponent,
    AdminTemplatesComponent,
    PageNotFoundComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    FormbuilderRoutingModule,
    DndModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatChipsModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatMenuModule,
    MatPaginatorModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },

    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})

export class FormbuilderModule { }




