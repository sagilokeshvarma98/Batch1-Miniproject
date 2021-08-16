import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCancellationComponent } from './pending-cancellation.component';

describe('PendingCancellationComponent', () => {
  let component: PendingCancellationComponent;
  let fixture: ComponentFixture<PendingCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingCancellationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
