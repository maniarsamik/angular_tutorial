import { TestBed } from '@angular/core/testing';

import { EmployeeApiDataService } from './employee-api-data.service';

describe('EmployeeApiDataService', () => {
  let service: EmployeeApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
