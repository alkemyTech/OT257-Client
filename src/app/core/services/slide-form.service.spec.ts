import { TestBed } from '@angular/core/testing';

import { SlideFormService } from './slide-form.service';

describe('SlideFormService', () => {
  let service: SlideFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
