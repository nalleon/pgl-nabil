import { TestBed } from '@angular/core/testing';

import { GatoServiceService } from './gato-service.service';

describe('GatoServiceService', () => {
  let service: GatoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
