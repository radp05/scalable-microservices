import { NgModule } from '@angular/core';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module';

@NgModule({
  declarations: [DevicesComponent],
  imports: [
    DevicesRoutingModule
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
