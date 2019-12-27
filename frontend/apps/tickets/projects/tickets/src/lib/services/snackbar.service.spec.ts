import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { MatSnackBar } from '@angular/material';

describe('SnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: MatSnackBar }
    ]
  }));

  it('should be created', () => {
    const service: SnackbarService = TestBed.get(SnackbarService);
    expect(service).toBeTruthy();
  });
});
