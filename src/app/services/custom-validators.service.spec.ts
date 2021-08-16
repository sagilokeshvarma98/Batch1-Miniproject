import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CustomvalidatorsService } from './custom-validators.service';

describe('CustomValidatorsService', () => {
  let service: CustomvalidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CustomvalidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
