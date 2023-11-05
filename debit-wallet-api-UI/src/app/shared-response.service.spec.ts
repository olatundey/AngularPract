import { TestBed } from '@angular/core/testing';

import { SharedResponseService } from './shared-response.service';

describe('SharedResponseService', () => {
  let service: SharedResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
