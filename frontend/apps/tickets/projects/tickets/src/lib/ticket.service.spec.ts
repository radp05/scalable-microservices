import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('TicketService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });
});
