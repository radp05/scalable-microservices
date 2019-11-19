import { TestBed } from '@angular/core/testing';

import { DevicesService } from './devices.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('DevicesService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DevicesService = TestBed.get(DevicesService);
    expect(service).toBeTruthy();
  });
});
