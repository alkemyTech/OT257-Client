import { TestBed } from '@angular/core/testing';

import { PublicApiServicesService } from './public-api-services.service';

describe('PublicApiServicesService', () => {
  let service: PublicApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
