import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [CustomTooltipComponent],
  imports: [
    CommonModule,
    MdePopoverModule,
    MatCardModule
  ],
  exports: [CustomTooltipComponent]
})
export class CustomTooltipModule { }
