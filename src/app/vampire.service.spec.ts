import { TestBed } from '@angular/core/testing';

import { VampireService } from './vampire.service';

describe('VampireService', () => {
  let service: VampireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VampireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
