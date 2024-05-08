import { TestBed } from '@angular/core/testing';

import { OnMenuClickedService } from './on-menu-clicked.service';

describe('OnMenuClickedService', () => {
  let service: OnMenuClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnMenuClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
