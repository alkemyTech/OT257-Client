import { TestBed } from '@angular/core/testing';

import { OrgViewService } from './org-view.service';

describe('OrgViewService', () => {
  let service: OrgViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
