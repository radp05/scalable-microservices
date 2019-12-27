import { TestBed } from '@angular/core/testing';

import { FormbuilderService } from './formbuilder.service';

describe('FormbuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormbuilderService = TestBed.get(FormbuilderService);
    expect(service).toBeTruthy();
  });
});
