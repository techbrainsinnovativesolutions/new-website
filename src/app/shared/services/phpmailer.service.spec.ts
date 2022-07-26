import { TestBed } from '@angular/core/testing';

import { PhpmailerService } from './phpmailer.service';

describe('PhpmailerService', () => {
  let service: PhpmailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpmailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
