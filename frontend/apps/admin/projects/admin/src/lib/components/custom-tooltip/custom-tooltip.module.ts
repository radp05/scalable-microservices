import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CustomTooltipComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MdePopoverModule,
    MatCardModule
  ],
  exports: [CustomTooltipComponent]
})
export class CustomTooltipModule { }
