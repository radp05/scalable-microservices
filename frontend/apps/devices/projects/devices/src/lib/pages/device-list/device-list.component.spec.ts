import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListComponent } from './device-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatDialog, MatSnackBar } from '@angular/material';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

const mockDataSource = {
  dataSource: []
}

describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceListComponent],
      imports: [
        RouterTestingModule,
        MatTableModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: MatTableDataSource, useValue: mockDataSource },
        { provide: MatDialog },
        { provide: MatSnackBar }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
