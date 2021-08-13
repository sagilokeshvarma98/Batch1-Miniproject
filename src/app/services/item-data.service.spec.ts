import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ItemDataService } from './item-data.service';

describe('ItemDataService', () => {
  let service: ItemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ItemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
