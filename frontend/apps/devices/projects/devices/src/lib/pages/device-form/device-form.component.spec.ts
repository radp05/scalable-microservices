import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFormComponent } from './device-form.component';
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DevicesService } from '../../devices.service';
import { MatSnackBar } from '@angular/material';

describe('DeviceFormComponent', () => {
  let component: DeviceFormComponent;
  let fixture: ComponentFixture<DeviceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceFormComponent],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: DevicesService, useClass: MockDeviceService },
        { provide: MatSnackBar }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockDeviceService {

}
