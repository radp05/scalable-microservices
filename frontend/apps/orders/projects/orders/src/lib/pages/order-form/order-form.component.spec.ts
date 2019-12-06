import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdersService } from '../../orders.service';
import { MatSnackBar } from '@angular/material';

describe('DeviceFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFormComponent],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        // tslint:disable-next-line: no-use-before-declare
        { provide: OrdersService, useClass: MockOrderService },
        { provide: MatSnackBar }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockOrderService {

}
