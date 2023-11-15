import { TestBed } from '@angular/core/testing';

import { MortalService } from './chronicles.service';

describe('ChroniclesService', () => {
  let service: MortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
