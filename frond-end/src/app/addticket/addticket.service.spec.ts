import { TestBed } from '@angular/core/testing';

import { AddTicketService } from './addticket.service';

describe('AddticketService', () => {
  let service: AddTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
