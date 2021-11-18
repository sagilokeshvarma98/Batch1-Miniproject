import { TestBed } from '@angular/core/testing';
import { AdminProtectionGuard } from './admin-protection.guard';

describe('AdminProtectionGuard', () => {
  let guard: AdminProtectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminProtectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
