import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  providers: [SharedService]
})
export class SharedModule { }
