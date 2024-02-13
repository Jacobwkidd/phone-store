import { TestBed } from '@angular/core/testing';

import { PhoneDbService } from './phone.service';

describe('VehicleService', () => {
  let service: PhoneDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});