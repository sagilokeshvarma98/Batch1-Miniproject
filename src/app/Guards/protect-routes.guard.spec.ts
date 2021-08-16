import { TestBed } from '@angular/core/testing';

import { ProtectRoutesGuard } from './protect-routes.guard';
import { RouterTestingModule } from '@angular/router/testing';



describe('ProtectRoutesGuard', () => {
  let guard: ProtectRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports:[RouterTestingModule]
    });
    guard = TestBed.inject(ProtectRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
