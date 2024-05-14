import { TestBed } from '@angular/core/testing';

import { TenDaysService } from './ten-days.service';

describe('TenDaysService', () => {
  let service: TenDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
