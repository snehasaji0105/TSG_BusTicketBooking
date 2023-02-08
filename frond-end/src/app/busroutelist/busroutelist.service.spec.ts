import { TestBed } from '@angular/core/testing';

import { BusroutelistService } from './busroutelist.service';

describe('BusroutelistService', () => {
  let service: BusroutelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusroutelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
