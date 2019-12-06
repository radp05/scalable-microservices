import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('DevicesService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });
});
