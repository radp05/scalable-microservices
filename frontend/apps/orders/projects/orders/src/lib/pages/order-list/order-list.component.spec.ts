import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatDialog, MatSnackBar } from '@angular/material';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

const mockDataSource = {
  dataSource: []
}

describe('DeviceListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  // tslint:disable-next-line: prefer-const
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListComponent],
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
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
