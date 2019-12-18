import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListComponent } from './ticket-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatDialog, MatSnackBar } from '@angular/material';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

const mockDataSource = {
  dataSource: []
}

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketListComponent],
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
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
