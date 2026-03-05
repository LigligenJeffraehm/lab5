import { TestBed } from '@angular/core/testing';

import { HoennRegionService } from './hoenn-region.service';

describe('HoennRegionService', () => {
  let service: HoennRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
