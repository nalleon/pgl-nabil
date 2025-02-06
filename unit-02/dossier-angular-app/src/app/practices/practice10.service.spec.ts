import { TestBed } from '@angular/core/testing';

import { Practice10Service } from './practice10.service';

describe('Practice10Service', () => {
  let service: Practice10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
