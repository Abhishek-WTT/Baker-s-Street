import { TestBed } from '@angular/core/testing';

import { AntigaurdService } from './antigaurd.service';

describe('AntigaurdService', () => {
  let service: AntigaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntigaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
